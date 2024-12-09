import React from 'react'

const BookDetail = () => {
  return (
        <div className='bookDetails'>
        <div className='bookImage'></div>
        <div className='bookInfo'>
            <h1>title</h1>
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

export default BookDetail