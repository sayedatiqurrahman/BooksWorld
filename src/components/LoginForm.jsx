import React from 'react';

const LoginForm = () => {
    return (
        <div className='flex flex-col gap-5'>
            <input className=' focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Email' type="email" />
            <input className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Password' type="password" />
            <button className=' bg-opacity-20 bg-purple-900  py-2 font-semibold rounded-xl'>Login</button>
        </div>
    );
};

export default LoginForm;