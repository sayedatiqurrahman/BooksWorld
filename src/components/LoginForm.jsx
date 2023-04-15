import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

const auth = getAuth();
const LoginForm = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
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

    const emailRef = useRef()
    const handleResetPassword = () => {
        setError('')
        setSuccess('')
        const email = emailRef.current.value;
        if (!email) {
            setError('Please Enter your email address')
        }
        sendPasswordResetEmail(auth, email).then(res => alert('Check your email to reset your password')).catch(err => setError(err.message))
    }
    return (
        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
            <input name='email' ref={emailRef} className=' focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Email' type="email" />
            <input name='password' className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Password' type="password" />
            <p className='text-green-700 text-center'><small>{success}</small></p>
            <p className='text-red-700 text-center'><small>{error}</small></p>
            <button type='submit' className=' bg-opacity-20 bg-purple-900  py-2 font-semibold rounded-xl'>Login</button>
            <Link onClick={handleResetPassword} className='text-purple-700 hover:underline text-center'>Forget Password</Link>
        </form>
    );
};

export default LoginForm;