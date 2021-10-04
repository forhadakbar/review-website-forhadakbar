import React from 'react';

// About Component. CSS file was not needed as i am using tailwindcss.

const About = () => {
    return (

        <div>

            <div className="bg-gray-900 text-center text-white px-96 py-48">
                <h1 className="font-black text-5xl pb-8"><small className="font-black text-5xl text-green-500">Our mission</small> is to democratize web development skills for everyone</h1>
                <p>Companies and teams of every size use WeDev to close their web dev skill gaps and make better career.</p>
            </div>

            <div className="px-96">
                <h1 className="font-black text-5xl py-8 text-left">The impact of Web Development</h1>
                <p className="ext-left text-xl my-8"> Web Development are rapidly shaping every aspect of our lives and our businesses. We’re using more web than ever before, but not everyone is able to efficiently develope all that web application to make end user happy. There is incredible power in web—but only if you know what to do with it. WeDev teaches companies and individuals the skills they need to work with web development in the real world.</p>
            </div>

            <div className="grid grid-cols-4 gap-8 text-center m-16">

                <div className="bg-yellow-400 py-28">
                    <h1 className="font-black text-5xl">2,000+</h1>
                    <p className="font-normal text-2xl">COMPANIES</p>
                </div>
                <div className="bg-pink-500 py-28">
                    <h1 className="font-black text-5xl">3,000+</h1>
                    <p className="font-normal text-2xl">ACADEMIC ORGANIZATIONS</p>
                </div>


                <div className="bg-yellow-600 py-28">
                    <h1 className="font-black text-5xl">9 million</h1>
                    <p className="font-normal text-2xl">WeDev LEARNERS</p>
                </div>

                <div className="bg-blue-500  py-28">
                    <h1 className="font-black text-5xl">180+</h1>
                    <p className="font-normal text-2xl">COUNTRIES</p>
                </div>

            </div>

        </div >

    );
};

export default About;