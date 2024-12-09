import React from 'react'

const Book = () => {
  return (
    <div className='book w-[160px] h-[240px] flex flex-col justify-start items-start'>
    <div className='bookImage w-[140px] h-[200px] bg-orange-300'>

    </div>
    <div className='bookInfo w-full'>
        <h1 className='font-bold'>title</h1>
        <p className='w-full flex flex-row justify-start gap-x-2'>
            <span>writer 저</span>
            <span> | </span>
            <span>publisher</span>
        </p>
    </div>
    
</div>

  )
}

export default Book