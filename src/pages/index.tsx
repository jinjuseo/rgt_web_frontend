import { useEffect, useState } from "react";
import { getBooks, getBooksPaging } from "../api/book";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Modal from "../components/Modal";
import Book from "../components/Book";
import { BookType } from '../types/aboutBook';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { toast } from "material-react-toastify";
import { getPageNumbers } from "@/utils/utils";
const PAGE_LIMIT=10;
const MAX_PAGE_BUTTONS =5;

export default function Home(){
  const [searchedBooks,setSearchedBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen]= useState(false);
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null); 
  const [currentPage,setCurrentPage] = useState(1);

  //전체 책 count를 알기 위해서 (페이징을 하기위해서) 
  //mockapi에는 전체 카운트를 안알려주기때문
  const fetchTotalBooks = async()=>{
    const response = await getBooks();
    try{
      if(response.status === 200){
        return response.data;
      }else throw new Error("데이터 로드 실패");
    }catch(err){
      console.error(err);
      toast.error('전체 책 정보를 받아오는데 실패했습니다');
    }
  }
  const {
    data: totalBooks,
  } = useQuery({
    queryKey: ["totalBooks"],
    queryFn: fetchTotalBooks,
  });

  //paging해서 데이터요청
    const fetchBooks = async(page:number, limit:number)=>{
    const response = await getBooksPaging(page,limit);
    if(response.status === 200){
      return response.data;
    }else throw new Error("데이터 로드 실패");
  }
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["books", currentPage], // 쿼리 키에 페이지 번호 포함
    queryFn: () => fetchBooks(currentPage, PAGE_LIMIT), 
    placeholderData:keepPreviousData,
  });

  const totalPages = totalBooks ? Math.ceil(totalBooks.length/PAGE_LIMIT) : 0;
  const pageNumbers = getPageNumbers(currentPage, totalPages, MAX_PAGE_BUTTONS);

  const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const text = e.target.value;
    setSearchText(text);
    if(text==='') setIsSearching(false);
    else setIsSearching(true);
  }
  useEffect(()=>{
    if(isSearching){
      const filtered = totalBooks?.filter((book:BookType)=>  book.title.includes(searchText)|| book.writer.includes(searchText));
      setSearchedBooks(filtered);
    }
  },[searchText])
  const openModal=(book:BookType)=>{
    setIsOpen(true);
    setSelectedBook(book);
  }
  const closeModal=()=>{
    setIsOpen(false);
    setSelectedBook(null);
  }
  return (
    <section className="w-full h-full p-4 flex flex-col gap-4 justify-start items-center overflow-y-auto font-['NotoSansKorean']">
      <h1 className="w-full px-8 py-4 flex justify-between">
        <span className="text-3xl font-bold text-primary opacity-0">책 목록</span>
        <span><input onChange={onChange} className="w-52 border-primary border-[1px] outline-none p-2"placeholder="책 제목, 저자를 입력하세요."/></span>
      </h1>
      {isLoading && <p>로딩중...</p>}
      {isError && <p>에러</p>}
      { books && !isSearching &&
        <ul className="w-full min-h-[36rem] max-h-[44rem] overflow-y-auto p-8 flex flex-row flex-start flex-wrap gap-4 ">
          {
            books?.map((book:BookType,i:number)=>{
              return(<li  onClick={() => openModal(book)}className="cursor-pointer" key={i}>
                      <Book book={book}/>
                    </li>);
            })
          }
        </ul>
      }
      {
        books && !isSearching &&
        <ul className="min-w-5 flex flex-row flex-start gap-x-2 items-center">
            <li><button onClick={()=>setCurrentPage((prev:number)=>Math.max(prev - 1, 1))}
            disabled={currentPage===1}
            ><GrPrevious/></button></li>
          {pageNumbers.map((page) => (
            <li key={'page/'+page}>
                <button
                    onClick={() => setCurrentPage(page)}
                    className={`size-8 ${
                      page === currentPage ? 'bg-gray-500' : 'bg-gray-300'
                      } hover:bg-gray-500 transition ease-in delay-50 rounded-sm`}
                    >
                      {page}
                    </button>

            </li>
          
            ))}

            <li><button onClick={()=>setCurrentPage((prev:number)=> Math.min(prev + 1, totalPages))} 
            disabled={currentPage===totalPages}
            >
              <GrNext/></button></li>

          
        </ul>
      }
      {
        books&&isSearching && 
        <ul className="w-full h-92 p-8 flex flex-row flex-start flex-wrap gap-4">
        {
          searchedBooks?.map((book:BookType,i:number)=>{
            return(<li  key={i} onClick={() => openModal(book)} className="cursor-pointer">
                    <Book book={book}/>
                  </li>);
          })
        }
      </ul>
      }
      {isOpen && (
        <Modal book={selectedBook} onClose={closeModal} />
      )}
    </section>
  )
}