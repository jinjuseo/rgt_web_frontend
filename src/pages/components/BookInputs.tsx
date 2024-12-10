import { BookType } from '@/types/aboutBook';
import React from 'react'
import Input from './Input';
interface InputParams {
    book: BookType | null;
    onChange:()=>{};
}
const BookInputs:React.FC<InputParams> = ({book}) => {
  return (
    <div className='w-full h-full p-4'>
      <div className='bookImage'></div>
        <div className='bookInfo'>
            <Input type={'string'} value={book?.title} name='title'/>
            <p>
                <span>writer</span>
                <span>publisher</span>
                <span>createdAt</span>
            </p>
            <p>
                <span>starRating</span>
                <span>salesVolume</span>
            </p>
        </div>
    </div>
  )
}

export default BookInputs