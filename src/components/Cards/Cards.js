import React from 'react';

// Card Component. CSS file was not needed as i am using tailwindcss.



const Cards = (props) => {

    const { title, img, title_desc, instructors_name, student_enrolled, rating, student_rated } = props.course;



    return (
        <div className="">

            <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                <a href="/" className="w-full block h-full">
                    <img alt="Course" src={img} className="max-h-40 w-full object-cover" />
                    <div className="bg-white w-full p-4">
                        <p className="text-indigo-500 text-2xl font-medium">
                            {title}
                        </p>
                        <p className="text-gray-800 text-sm font-medium mb-2">
                            {instructors_name}
                        </p>
                        <p className="text-gray-600 font-light text-md h-28">
                            {title_desc}...
                            <a className="inline-flex text-indigo-500" href="/">Read More</a>
                        </p>
                        <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                #online
                            </span>
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                #internet
                            </span>
                            <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                                #education
                            </span>
                        </div>
                        <div className="flex items-center mt-2">


                            <div className="pl-3">
                                <div className="font-medium">
                                    <p>Student Enrolled: {student_enrolled}</p>
                                </div>
                                <div className="text-yellow-400 text-sm">
                                    <p className='mb-2 small'>
                                        {/* Show Rating Star */}
                                        <small className='text-warning'>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half"></i>

                                        </small>{' '}
                                        {/* Show Student Rated */}
                                        <small className='text-muted text-gray-800'>
                                            {' '}
                                            {rating} ({student_rated})
                                        </small>
                                    </p>
                                </div>
                            </div>

                            <button className="bg-green-400 px-3 rounded ml-6 mt-6 font-bold hover:bg-green-300">Enroll</button>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    );
};

export default Cards;