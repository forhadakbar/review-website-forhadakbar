import React from 'react';
import { NavLink } from 'react-router-dom';


// Header Component. CSS file was not needed as i am using tailwindcss.

const Header = () => {
    return (

        <div className="w-full">

            {/* Nav-bar. */}

            <nav className="flex justify-between items-center p-5 text-white bg-gray-900">
                <h1 className="text-blue-400 font-bold text-3xl"><i className="fab fa-connectdevelop"> WeDev School</i> </h1>

                <div className="text-md">

                    <NavLink
                        className="mr-6 hover:text-blue-400 transition duration-150"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "Yellow"
                        }} to="/home">Home</NavLink>


                    <NavLink className="mr-6 hover:text-blue-400 transition duration-150"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "Yellow"
                        }} to="/services">Services</NavLink>
                    <NavLink className="mr-6 hover:text-blue-400 transition duration-150"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "Yellow"
                        }} to="/pricing">Pricing</NavLink>
                    <NavLink className="mr-6 hover:text-blue-400 transition duration-150"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "Yellow"
                        }} to="/about">About</NavLink>
                    <NavLink className="mr-6 hover:text-blue-400 transition duration-150 border-2 border-white rounded-md px-4 py-2"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "Yellow"
                        }} to="/signin">Sign In</NavLink>
                </div>

            </nav>



        </div>



    );
};

export default Header;