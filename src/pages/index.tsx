// import Image from "next/image";
// import localFont from "next/font/local";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBooks } from "./api/book";
import { useQuery } from "@tanstack/react-query";
import Modal from "./components/Modal";
import Book from "./components/Book";
import { BookType } from '../types/aboutBook';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function Home(){
  const [page,setPage] = useState(1);
  const [searchedBooks,setSearchedBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen]= useState(false);

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
    error,
    refetch,
  } = useQuery({
    queryKey: ["getBooks"],
    queryFn: fetchBooks,
    // refetchInterval: 1000 * 60, // 1분마다 데이터 갱신
  });
  const onChange=(e:any)=>{
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
  return (
    <section className="w-full h-full flex flex-col justify-start items-center overflow-y-auto">
      <h1 className="w-full p-8 flex justify-between">
        <span>책 목록</span>
        <span><input onChange={onChange} className="w-52 border-primary border-[1px] outline-none p-2"placeholder="책 제목, 저자를 입력하세요."/></span>
      </h1>
      {isLoading && <p>로딩중...</p>}
      {isError && <p>에러</p>}
      { books && !isSearching &&
        <ul className="w-full p-8 flex flex-row flex-start flex-wrap">
          {
            books?.slice((page-1)*10, page*10).map((book:BookType,i:number)=>{
              return(<li  key={i}>
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
            Array.from({length: Math.ceil(books.length/10)}).map((_, i: number) => (
              <li key={'page'+i}>
                <button className={`bg-gray-300 size-8 ${page===i+1 && 'bg-gray-500'} hover:bg-gray-500`} onClick={() => setPage(i + 1)}>{i + 1}</button>
              </li>
            ))
          }
          <li><button onClick={()=>setPage((prev:number)=>(prev+1))} 
            disabled={page===Math.ceil(books.length/10) && true}
            className={`${page===Math.ceil(books.length/10) &&'text-white'}`}><GrNext/></button></li>

          
        </ul>
      }
      {
        books&&isSearching && 
        <ul className="w-full h-92 p-8 flex flex-row flex-start flex-wrap ">
        {
          searchedBooks?.map((book:BookType,i:number)=>{
            return(<li  key={i}>
                    <Book book={book}/>
                  </li>);
          })
        }
      </ul>
      }
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  )
}