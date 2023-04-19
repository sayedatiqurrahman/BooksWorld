import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import login from './assets/login.json'
import google from './assets/google-logo.json'
import facebook from './assets/facebook.json'
import twitter from './assets/twitter.json'
import github from './assets/github.json'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from './components/firebase/firebase.init'


const Login = () => {
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider()
    const FacebookProvider = new FacebookAuthProvider()
    const TwitterProvider = new TwitterAuthProvider()
    const GitHubProvider = new GithubAuthProvider()

    const [sign, setSign] = useState(false)

    const [user, setUser] = useState(null)

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const loadedUser = result.user;
                localStorage.setItem('user', JSON.stringify(loadedUser))
                setSign(!user)
            })
            .catch(error => { console.log('GoogleError', error.message) })
    }

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, FacebookProvider)
            .then(result => {
                const loadedUser = result.user;
                localStorage.setItem('user', JSON.stringify(loadedUser))
                setSign(!user)
            })
            .catch(error => {
                console.log('Fberror', error.message)
            })

    }
    const handleTwitterSignIn = () => {
        signInWithPopup(auth, TwitterProvider)
            .then(result => {
                const loadedUser = result.user;
                localStorage.setItem('user', JSON.stringify(loadedUser))
                setSign(!user)
            })
            .catch(error => console.log('TwitterError', error.message))

    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                const loadedUser = result.user;
                localStorage.setItem('user', JSON.stringify(loadedUser))
                setSign(!user)
            })
            .catch(error => console.log('GithubError', error.message))

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                localStorage.clear()
                setSign(!user)
                setUser(null)

            })
            .catch(error => console.log('ErrorSignOut', error.message))
    }


    const DBUser = localStorage.getItem('user')
    useEffect(() => {
        setUser(JSON.parse(DBUser))
    }, [sign])

    return (
        <>
            <h1 className='text-center h1 mt-12 text-purple-700 my-5'>Welcome to books World</h1>
            <div className='flex flex-col-reverse md:flex-row gap-5 md:gap-10 lg:gap-32  justify-center p-5 items-center MyContainer'>
                <div >

                    {
                        !sign ? <LoginForm /> : <SignUpForm />
                    }

                    <hr className='my-4' />
                    <div>
                        {/* <p className='text-center text-purple-600 max-w-sm'>
                            {
                                !sign ? <span >If You Have not  account </span> : <span >If You Have already an account click the login (<FontAwesome></FontAwesome>)</span>
                            }
                        </p> */}
                        <div className='font-semibold text-center'>Login with  /
                            {
                                !sign ? <button className='text-purple-700 ml-1 underline' onClick={() => setSign(true)}>Sign up</button> : <>
                                    <span className='ml-1'>If you have already an Account </span>
                                    <button className='text-purple-700  underline' onClick={() => setSign(false)}> Login</button>


                                </>
                            }
                        </div>
                        <br />
                        <div className='flex gap-1 flex-wrap'>
                            <button onClick={handleGoogleSignIn} className='logBtn'><Lottie className='h-20' animationData={google} loop={true}></Lottie></button>
                            <button onClick={handleFacebookSignIn} className='logBtn'><Lottie className='h-20' animationData={facebook} loop={true}></Lottie></button>
                            <button onClick={handleTwitterSignIn} className='logBtn' disabled><Lottie className='h-20' animationData={twitter} loop={true}></Lottie></button>
                            <button onClick={handleGithubSignIn} className='logBtn '><Lottie className='h-12 w-20' animationData={github} loop={true}></Lottie></button>
                        </div>
                    </div>
                </div>
                <div>
                    <Lottie animationData={login} className='h-96 md:h-[450px]' loop={true} />
                </div>
            </div>


            <hr className='my-7' />
            {
                user &&
                <div className='MyContainer flex flex-col md:flex-row text-center md:text-left justify-center gap-5 lg:px-20 items-center'>
                    <div className='text-5xl font-semibold  font-sans text-gray-700 md:border-r-2 pr-4'>Your Profile</div>
                    <img className='h-16 w-16 rounded-full ' src={user?.photoURL} alt="" />
                    <div>
                        <p className='text-lg font-semibold'>{user?.displayName}</p>
                        <p>{user?.email}</p>
                    </div>

                    <button onClick={handleSignOut} className='bg-opacity-10  bg-purple-900 px-5 lg:px-6 py-3 font-semibold rounded-lg border-2 border-purple-700 md:ml-auto'>Sign Out</button>
                </div>
            }
            <br />
            <hr />
        </>
    );
};

export default Login;