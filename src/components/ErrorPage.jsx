import React from 'react';
import { useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div className='flex flex-col h-[calc(100vh-150px)] justify-center items-center'>
            <h1 className='text-7xl'>{status}</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorPage;