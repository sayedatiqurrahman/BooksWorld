import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
const SignUpForm = () => {
    const auth = getAuth();
    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const handleCreateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setError('')
        setSuccess('')
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please use At least one Uppercase Latter')
            return;
        } else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please use At least one Special character')
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please use At least two numbers')
            return;
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError('Please use At least one lowercase Latter')
            return;
        } else if (password.length < 8) {
            setError('Password must be at least 8 characters')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                const user = result.user;
                setSuccess('Created user successfully')

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(result => { }).catch(error => { setError(error.message) })
                sendEmailVerification(auth.currentUser)
                    .then(result => {
                        alert('check your email to verify ')
                    })
                    .catch(err => { setError(err.message) })
            })
            .catch(err => {
                setError(err.message || 'Unknown error');
            });
        event.target.reset()
    }

    return (
        <form onSubmit={handleCreateUser} className='flex flex-col gap-5'>
            <input required name='name' className=' focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Name' type="text" />
            <input required name='email' className=' focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Email' type="email" />
            <input required name='password' title={error} className='max-w-96 w-full focus:outline-none py-2 px-3 bg-[#5d23c91e] rounded-lg' placeholder='Enter Your Password' type="password" />
            <p className='text-green-700 text-center'><small>{success}</small></p>
            <p className='text-red-700 text-center'><small>{error}</small></p>
            <button type="submit" className=' bg-opacity-20 bg-purple-900  py-2 font-semibold rounded-xl'>Sign Up</button>

        </form>
    );
};

export default SignUpForm;