import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import Loading from './Loading';
const BookDetails = () => {
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
        return <Loading />
    }
    const [read, setRead] = useState(true)
    const { image, title, authors, publisher, year, rating, desc, price } = useLoaderData()
    return (
        <div className='MyContainer  flex items-center justify-center gap-6'>
            <img className='h-[500px]' src={image} alt="" />
            <div className="info max-w-[650px]">
                <p className='badge animate-bounce w-32'>BRAND NEW</p>
                <h1 className='h1'>{title}</h1>

                <p> <span className='font-semibold'>Authors:</span> {authors}</p>
                <p><span className='font-semibold'>Publisher:</span> {publisher}</p>
                <p><span className='font-semibold'>Year:</span> {year}</p>
                <p><span className='font-semibold'>Rating:</span> {rating}</p>
                { }
                <p className='text-gray-600'> <span>{read ? <p>{desc.substring(0, 200)}... <button className='text-blue-600' onClick={() => setRead(false)}>Read More</button></p> : <p>{desc} <button className='text-blue-600' onClick={() => setRead(true)}>Read less</button></p>}</span></p>

                <button className='btn mr-4'>Read Now</button>
                <span className='font-semibold'> Price: <span className='text-purple-900'>{price}</span></span>
            </div>

        </div >
    );
};

export default BookDetails;