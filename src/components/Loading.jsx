import React from 'react';

const Loading = () => {
    return (
        <div className='flex text-7xl items-center justify-center  h-[calc(100vh-150px)]'>
            <p className='-rotate-6 animate-pulse'>L</p>
            <p className='transition-all duration-300 animate-bounce flex items-center -mb-5'><p className='h-10 w-10 flex items-center border-8 border-dashed border-purple-800 rounded-full animate-spin'></p></p>
            <p>ading</p >
            <span className='animate-pulse'>...</span>
        </div >
    );
};

export default Loading;