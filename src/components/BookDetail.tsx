import { BookType } from '@/types/aboutBook';
import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { deleteBook } from '../api/book';
import { useQueryClient } from '@tanstack/react-query';
import {  toast } from 'material-react-toastify';
interface BookDetailProps{
    book:BookType;
    onClose: () => void;
}

const BookDetail: React.FC<BookDetailProps> = ({book,onClose}) => {
    const queryClient= useQueryClient();
    const router = useRouter();
    const onClick =()=>{
        onClose();
        router.push(`/book/${book?.id}`);
    }
    const onDelete = async ()=>{
        const answer = confirm('삭제하시면 복구하실 수 없습니다\n정말 삭제하시겠습니까?');
        if(!answer) return;
        if(!book?.id) return;
        try{
            const response = await deleteBook(book?.id);
            if(response.status ===200){
                toast.success('책 정보를 삭제하였습니다.', {
                    theme: 'colored',
                });
                queryClient.invalidateQueries({ queryKey: ['totalBooks'] });
                queryClient.invalidateQueries({ queryKey: ['books'] });
                onClose();
            }
        }catch(err){
            console.error(err);
            toast.error('삭제 요청이 실패하였습니다.', {
                theme: 'colored',
            });
        }
    }
  return ( 
    <section className='w-full h-full flex flex-col justify-start gap-y-2'>
        <h1 className="font-semibold text-2xl">{book?.title}</h1>
        <div className='w-full h-full bookDetails flex flex-row justify-start gap-x-8'>
        <div className='bookImage w-[140px] h-[200px]  flex justify-center items-center text-6xl shadow-xl dropshadow-xl text-white rounded-sm '>
            <Image width={0} height={0} style={{ width: 'auto', height: '100%' }} alt={'책 이미지'} src={book?.imageUrl||'/bookImage.jpg'} unoptimized/>
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
        <div className='w-full flex justify-end items-center gap-x-4'>
        <a onClick={onClick}className='' ><span className="bg-stone-300 text-white p-2 px-4 rounded hover:bg-stone-400 transition ease-in delay-50 cursor-pointer">수정</span></a>
        <button onClick={onDelete} className='' ><span className="bg-red-500 text-white p-2 px-4 rounded hover:bg-red-600 transition ease-in delay-50 cursor-pointer">삭제</span></button>
        </div>
    </section>
  )
}

export default BookDetail