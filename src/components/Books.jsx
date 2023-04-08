import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Book from './book';
import Loading from './Loading';
const Books = () => {
    const navigation = useNavigation()
    console.log(navigation)
    if (navigation.state === 'loading') {
        return <Loading />
    }

    const { books } = useLoaderData() || []

    return (
        <div className='MyContainer grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
            {
                books.map(book => (<Book key={book.isbn13} book={book} />))
            }
        </div>
    );
};

export default Books;