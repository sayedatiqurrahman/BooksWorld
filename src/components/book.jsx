import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <div>
            <Link to={`../book/${book.isbn13}`}>
                <div className='relative border rounded-lg overflow-hidden hover:-translate-y-2 duration-200' >
                    <img className='h-96 mx-auto' src={book.image} alt="" />
                    <div className='p-3 opacity-0 hover:opacity-100 duration-200 bg-black absolute top-0 inset-0 bg-opacity-75 text-slate-100  flex flex-col '>
                        <h2 className='text-xl'>{book.title}</h2>
                        <p className='my-5'>{book.subtitle.substring(0, 70)}<span className={book.subtitle.length > 70 ? 'inline-block' : 'hidden'}>...</span> </p>
                        <p className='mt-auto'>Price: {book.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;