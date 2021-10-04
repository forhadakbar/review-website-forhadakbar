import React from 'react';
import { Link } from 'react-router-dom';

// Not Found Component. CSS file was not needed as i am using tailwindcss.

const NotFound = () => {
    return (
        <div className="m-28 text-center">

            <h1 className="font-black text-4xl my-4 ">404</h1>
            <h1 className="font-black text-4xl my-4 ">Page NOt Found</h1>
            <p className="font-normal text-xl my-4 ">Look like you're lost</p>
            <p className="pb-8">the page you are looking for not avaible!</p>
            <Link to="/home" className="font-bold text-normal bg-green-400 hover:bg-green-300 text-gray-900 text-center px-8 py-3 rounded-md w-72 mt-16">Go to Home</Link>


        </div>
    );
};

export default NotFound;