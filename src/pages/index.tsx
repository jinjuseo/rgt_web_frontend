import { useEffect, useState } from "react";
import { getBooks } from "../api/book";
import { useQuery } from "@tanstack/react-query";
import Modal from "../components/Modal";
import Book from "../components/Book";
import { BookType } from '../types/aboutBook';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


export default function Home(){
  const [page,setPage] = useState(1);
  const [searchedBooks,setSearchedBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen]= useState(false);
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null); 

  const calculatePage=()=>{
    const totalPages = Math.ceil(books.length / 10); 
    const maxVisiblePages = 5; 
    const half = Math.floor(maxVisiblePages / 2); // 현재 페이지를 기준으로 양쪽에 보일 버튼 수

    let startPage = Math.max(1, page - half); 
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    //  버튼 개수를 항상 maxVisiblePages로 유지
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    return [startPage, endPage];
  }
  const fetchBooks = async()=>{
    const response = await getBooks();
    if(response.status === 200){
      console.log(response.data);
      return response.data;
    }else throw new Error("데이터 로드 실패");
  }
  const {
    data: books,
    isLoading,
    isError,
    // error,
    // refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
  const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const text = e.target.value;
    setSearchText(text);
    if(text==='') setIsSearching(false);
    else setIsSearching(true);
  }
  useEffect(()=>{
    if(isSearching){
      const filtered = books?.filter((book:BookType)=>  book.title.includes(searchText)|| book.writer.includes(searchText));
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
            books?.slice((page-1)*10, page*10).map((book:BookType,i:number)=>{
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
            <li><button onClick={()=>setPage((prev:number)=>(prev-1))}
            disabled={page===1 && true}
            className={`${page===1 &&'text-white'}`}
            ><GrPrevious/></button></li>
          {
            Array.from({ length: Math.ceil(books.length / 10) }).map((_, i: number) => {
          
              const [startPage,endPage] = calculatePage();
              // 현재 버튼이 표시 범위에 있는 경우만 렌더링
              if (i + 1 >= startPage && i + 1 <= endPage) {
                return (
                  <li key={"page" + i}>
                    <button
                      className={`bg-gray-300 size-8 ${
                        page === i + 1 && "bg-gray-500"
                      } hover:bg-gray-500 transition ease-in delay-50 rounded-sm`}
                      onClick={() => setPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                );
              }

              return null; // 표시 범위를 벗어난 버튼은 렌더링하지 않음
            })
          }
                    <li><button onClick={()=>setPage((prev:number)=>(prev+1))} 
            disabled={page===Math.ceil(books.length/10) && true}
            className={`${page===Math.ceil(books.length/10) &&'text-white'}`}><GrNext/></button></li>

          
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