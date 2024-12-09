import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Book = () => {
    const router = useRouter();
    const [bookId, setBookId] = useState<number>(0);
    useEffect(() => {
        if (router) {
            setBookId(Number(router?.query?.id));
        }
      }, [router]);
  return (
    <div className='bookDetails'>
        <div className='bookImage'></div>
        <div className='bookInfo'>
            <h1>title / {bookId}</h1>
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

export default Book