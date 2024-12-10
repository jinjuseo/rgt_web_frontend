import { BookType } from '@/types/aboutBook';
import React from 'react'
// import { FaBook } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
interface BookProps{
  book:BookType;
}
const Book:React.FC<BookProps> = ({book}) => {
  return (
    <div className='book w-[200px] h-[240px] flex flex-col justify-start items-start'>
    <div className='bookImage w-[140px] h-[200px] bg-primary flex justify-center items-center text-6xl shadow-xl dropshadow-xl text-white rounded-sm'>
        <FaBookOpen/>
    </div>
    <div className='bookInfo w-full'>
        <h1 className='font-bold'>{book?.title}</h1>
        <p className='w-full flex flex-row justify-start gap-x-2'>
            <span>{book?.writer+' 저'}</span>
            <span> | </span>
            <span>{book?.publisher}</span>
        </p>
    </div>
    
</div>

  )
}

export default Book