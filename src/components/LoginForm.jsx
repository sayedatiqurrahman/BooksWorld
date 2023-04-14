import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const auth = getAuth();
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        setError('')
        setSuccess('')
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccess('you have successfully logged in')
            })
            .catch(err => setError(err.message))
    }
    return (
        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
            <input name='email' className=' focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Email' type="email" />
            <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Password' type="password" />
            <p className='text-green-700 text-center'><small>{success}</small></p>
            <p className='text-red-700 text-center'><small>{error}</small></p>
            <button type='submit' className=' bg-opacity-20 bg-purple-900  py-2 font-semibold rounded-xl'>Login</button>
        </form>
    );
};

export default LoginForm;