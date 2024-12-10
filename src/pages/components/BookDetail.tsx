import { BookType } from '@/types/aboutBook';
import Link from 'next/link';
import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/router';
interface BookDetailProps{
    book:BookType;
    onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({book,onClose}) => {
    const router = useRouter();
    const onClick =()=>{
        onClose();
        router.push(`/book/${book?.id}`);
    }
  return ( 
    <section className='w-full h-full flex flex-col justify-start gap-y-2'>
        <h1 className="font-semibold text-2xl">{book?.title}</h1>
        <div className='w-full h-full bookDetails flex flex-row justify-start gap-x-8'>
        <div className='bookImage w-[140px] h-[200px] bg-primary flex justify-center items-center text-6xl shadow-xl dropshadow-xl text-white rounded-sm '>
            <Image width={0} height={0} style={{ width: 'auto', height: '100%' }} alt={'책 이미지'} src={book?.imageUrl||'/bookImage.jpg'}/>
        </div>
        <div className='bookInfo w-3/5 h-full'>
           
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
            
        </div>
        </div>
        <div className='description w-full h-12 break-words overflow-auto'>
            {book?.description}
        </div>
        <a onClick={onClick}className='flex justify-end' ><span className="bg-stone-300 text-white p-2 px-4 rounded hover:bg-stone-400 transition ease-in delay-50 cursor-pointer">수정</span></a>
    </section>
  )
}

export default BookDetail