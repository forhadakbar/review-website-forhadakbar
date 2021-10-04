import React from 'react';

const SignIn = () => {
    return (

        <div className="text-left bg-white p-4 rounded-md flex justify-center items-center my-12">

            <div class="w-full max-w-xs">

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="font-bold text-lg text-center py-3">Welcome Back!</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signin">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>

        </div >

    );
};

export default SignIn;