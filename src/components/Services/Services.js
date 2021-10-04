import React from 'react';

import useCourses from '../../hooks/useCourses';
import Cards from '../Cards/Cards';

// Services Component. CSS file was not needed as i am using tailwindcss.

const Services = () => {

    const [courses] = useCourses();
    return (

        <div className="p-16 bg-gray-200">

            <h1 className="font-black text-3xl my-8 ">Launch your career</h1>

            <div className="grid grid-cols-3 gap-8 text-center font-bold text-xl">

                <p className="bg-white border-b-8 border-pink-600 p-4 rounded hover:bg-pink-600 py-8">Front End Dev</p>
                <p className="bg-white border-b-8 border-pink-600 p-4 rounded hover:bg-pink-600 py-8">Scrum Master</p>
                <p className="bg-white border-b-8 border-pink-600 p-4 rounded hover:bg-pink-600 py-8">Full Stack Developer</p>
                <p className="bg-white border-b-8 border-pink-600 p-4 rounded hover:bg-pink-600 py-8">React Developer</p>
                <p className="bg-white border-b-8 border-pink-600 p-4 rounded hover:bg-pink-600 py-8">Project Manager</p>
                <p className="bg-white border-b-8 border-pink-600 p-4 rounded hover:bg-pink-600 py-8">Programmer</p>


            </div>

            <h1 className="font-black text-4xl mt-16 text-center" > Our Services</h1>

            <hr className="h-3 mb-16 mt-2 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-900" />

            <div className="grid grid-cols-4 gap-4 ">

                {
                    courses.map(course => <Cards
                        course={course}
                        key={course.key}
                    ></Cards>)
                }


            </div>


        </div>


    );
};

export default Services;