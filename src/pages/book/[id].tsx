import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getBookDetails, updateBook } from '../api/book';
import { BookType } from '@/types/aboutBook';
import Input from '../components/Input';
import Image from "next/image";
import {  toast } from 'material-react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { isDateValid } from '@/utils/validateDate';

const checkValid = (book: BookType) => {
    const requiredFields = ['title', 'writer', 'createdAt', 'price', 'publisher', 'quantity', 'description'];
    for (const field of requiredFields) {
      if (!book[field as keyof BookType]) {
        toast.warning('모든 필드를 채워주세요.', { theme: 'colored' });
        return false;
      }
    }
    if (!isDateValid(book.createdAt)) {
        toast.warning('출간일은 yyyy-mm-dd 형식의 올바른 날짜여야 합니다.', {
          theme: 'colored',
        });
        return false;
      }
    if (isNaN(Number(book.price)) || isNaN(Number(book.quantity))) {
      toast.warning('가격과 수량은 숫자여야 합니다.', { theme: 'colored' });
      return false;
    }
    return true;
  };
const BookModify = () => {
    const queryClient= useQueryClient();
    const router = useRouter();
    const [bookId, setBookId] = useState<string>('');
    const [book,setBook] = useState<BookType>({
        id:'',
        createdAt:'',
        title:'',
        imageUrl:'',
        quantity:0,
        description:'',
        writer:'',
        publisher:'',
        price:0,
        salesVolume:0,
        starRating:0,
    });
    const onSave=async ()=>{
        const valid = checkValid(book);
        if(!valid) return;
            try{

                const response = await updateBook(bookId, book);
                if(response.status===200){
                    //console.log(response);
                    toast.success('책 정보를 저장했습니다.', {
                        theme: "colored",
                    });
                    queryClient.invalidateQueries({ queryKey: ['books'] });
                    router.push(`/`);
                }
            }catch(err){
                console.error(err);
                toast.error('저장을 실패했습니다.',{
                    theme: "colored",
                });
                
            }
    
        }
        const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setBook((prev) => ({
              ...prev,
              [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
            }));
          };
    useEffect(() => {
        if (router && typeof router.query.id === 'string') {
            setBookId(router?.query?.id);
        }
      }, [router]);
    useEffect(()=>{
        if(bookId) fetchBook();
    },[bookId]);
    const fetchBook = async()=>{
        const response = await getBookDetails(bookId);
        if(response.status === 200){
            setBook({...response.data});
        }else throw new Error("데이터 로드 실패");

    }
  return (
    <div className='w-full h-full p-4 flex flex-row justify-evenly flex-wrap '>
        <div className='bookImage min-w-[500px] w-2/5 h-full flex justify-center items-center '>
            <div className='w-1/2 min-w-[480px] h-3/4 bg-primary text-white font-5xl flex justify-center items-center shadow-xl drop-shadow-xl'>
            <Image width={0} height={0} style={{ width: 'auto', height: '100%' }} alt={'책 이미지'} src={book?.imageUrl||'/bookImage.jpg'}/>
            </div>
         
        </div>
        <div className='bookInfo w-2/5  min-w-1/3  h-full  flex justify-start items-center '>
            <div className='w-2/3 h-3/4 flex flex-col justify-start items-start gap-4'>
                <Input type={'string'} value={book?.title} name='title' label={'제목'} onChange={onChange} placeholder='백설공주와 일곱난쟁이'/>
                <Input type={'string'} value={book?.writer} name='writer' label={'저자'} onChange={onChange} placeholder='홍길동'/>
                <Input type={'string'} value={book?.publisher} name='publisher' label={'출판사'} onChange={onChange} length='md' placeholder='마음 출판'/>

                <Input type={'string'} value={book?.createdAt} name='createdAt' label={'출간일'} onChange={onChange} length='md' placeholder='2018-01-01'/>
                <Input type={'number'} value={book?.price} name='price' label={'판매가'} onChange={onChange} length='md' placeholder='12000'/>

                <div className="flex w-full justify-start items-center">
                    <label htmlFor={'description'} className="min-w-20">{'설명'}</label>
                    <textarea 
                    maxLength={100}
                    id='description'
                    name='description'
                    // defaultValue={book?.description} 
                    value={book?.description}       
                    onChange={onChange} 
                    className={`outline-none border-primary border-[1px] rounded-sm p-2 w-60 h-20`}
                    placeholder='옛날 옛적에 착한 흥부와 그의 형 나쁜 놀부가 살았는데 ...' >
                </textarea>
                </div>
                <Input type={'number'} value={book?.quantity} name='quantity' label={'수량'} onChange={onChange} length='sm' placeholder='999'/>
                <Input type={'number'} value={book?.starRating} label={'평점'}name='starRating' blocked={true} length='sm'/>
                <Input type={'number'} value={book?.salesVolume} label={'판매지수'} name='salesVolume' blocked={true} length='sm'/>

                <div className='w-full flex flex-row justify-end'><button className="bg-secondary text-white p-2 rounded px-4 transition delay-50 ease-in hover:bg-cyan-900"
                onClick={onSave}
                >저장</button></div>
            </div>
        </div>
       
  </div>
  )
}

export default BookModify