import React from 'react';

import useCourses from '../../hooks/useCourses';
import Cards from '../Cards/Cards';

// Home Component. CSS file was not needed as i am using tailwindcss.

const Home = () => {

    const [courses] = useCourses();

    // Show only 8 popular courses in home page

    const popularCourses = courses.slice(0, 8)

    return (
        <>

            <div className="flex justify-center items-center py-8 bg-gray-900">

                <div className="mx-16 text-white">
                    <h1 className="font-black text-4xl my-4 ">Build Web Development skills online</h1>
                    <p>Web drives everything. Get the skills you need for the future of work.</p>
                    <button className="font-bold text-xl bg-green-400 hover:bg-green-300 text-gray-900 text-center px-8 py-3 rounded-md my-3 w-72">Start Learning For Free</button>
                    <br />
                    <button className="font-bold text-xl border-2 border-yellow-300 hover:bg-gray-600 text-center px-8 py-3 rounded-md my-3 w-72">WeDev For Business</button>
                </div>

                <div className="text-left bg-white p-4 rounded-md">

                    <h2 className="font-bold text-lg text-center py-3">Create Your Free Account</h2>

                    <div class="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            <div className="flex flex-col items-center justify-between">
                                <button className="font-bold text-normal bg-green-400 hover:bg-green-300 text-gray-900 text-center px-8 py-3 rounded-md my-3 w-72">Start Learning For Free</button>
                                <p>Enjoy One Month Free Trial</p>
                            </div>
                        </form>
                    </div>

                </div >
            </div >


            <div className="p-16 bg-gray-200">

                <h1 className="font-black text-4xl mt-8 text-center" > Our Most Popular Courses</h1>

                <hr className="h-3 mb-8 mt-2 bg-gradient-to-r from-yellow-400 via-indigo-500 to-green-500" />


                <div className="grid grid-cols-4 gap-4 ">

                    {
                        popularCourses.map(course => <Cards
                            course={course}
                            key={course.key}
                        ></Cards>)
                    }


                </div>


            </div>









        </ >
    );
};

export default Home;