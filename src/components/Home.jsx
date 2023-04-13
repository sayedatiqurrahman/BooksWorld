import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from '../assets/education.json'
const Home = () => {
    return (
        <div className="MyContainer  flex flex-col-reverse items-center lg:flex-row px-4">
            <div className="left   w-full max-w-screen-sm">
                <p className="badge animate-bounce w-28 ">😍FREE!🥰</p>
                <h2 className="h1 my-4">A reader lives a
                    thousand lives  <br /><span className="text-purple-800">before he dies</span></h2>

                <p className="text-gray-600">Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
                <Link to="/books">
                    <button className="btn font-semibold">Visit Library</button>
                </Link>
                <Link className="ml-5 text-purple-900 font-semibold " to="/about">Learn More ...</Link>
            </div>
            <div className="right">
                <Lottie className='h-96 lg:h-full' animationData={animation} loop={true} />
            </div>
        </div>
    );
};

export default Home;