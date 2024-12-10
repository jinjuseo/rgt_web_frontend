import { BookType } from '@/types/aboutBook';
import Link from 'next/link';
import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
interface BookDetailProps{
    book:BookType;
}

const BookDetail: React.FC<BookDetailProps> = ({book}) => {
  return (
        <div className='w-full h-full bookDetails flex flex-row justify-start gap-4'>
        <div className='bookImage w-[140px] h-[200px] bg-primary flex justify-center items-center text-6xl shadow-xl dropshadow-xl text-white rounded-sm '>
            <FaBookOpen/>
        </div>
        <div className='bookInfo w-3/5 h-full'>
            <h1 className="font-semibold text-2xl">{book?.title}</h1>
            <ul className='list-disc list-inside'>
                <li>{book?.writer +' 저'}</li>
                <li>{book?.publisher}</li>
                <li>{book?.createdAt}</li>
                <li>{`${book?.price} ￦`}</li>
                <li>{`수량 ${book?.quantity} 권`}</li>
                <li className="">
                        <span>평점</span>
                        <FaStar className='text-yellow-300 inline-block mr-1 text-center'/>
                        <span >{`${book?.starRating.toFixed(1)}`}</span>
                </li>
                <li>{`판매지수 ${book?.salesVolume}`}</li>
              
            </ul>
            <Link className='flex justify-end' href={`/book/${book?.id}`}><span className="bg-stone-300 text-white p-1 px-2 rounded hover:bg-stone-400 transition ease-in delay-50">수정</span></Link>
        </div>

        </div>
  )
}

export default BookDetail