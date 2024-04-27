import React from 'react'

// upper nav links :

import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { FiHeart } from "react-icons/fi";

// lower nav links:

import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { BsTags } from "react-icons/bs";


function Navbar() {

    const list = ["Popular", "Deals", "Recently viewed", "Trending" , "Fashion" , "Baby Gear" , "Pet Accessories" , "Gadgets" , "Tools" ,"Health & Beauty", "More"];


    return (
        <div className='nav max-w-[100vw] max-h-[20vh] bg-white  '>
            {/* // ----------  Upper part of navbar ------------ // */}

            <div className='upper bg-white h-2/4 sm:p-[1vw] md:p-0 max-w-full flex sm:justify-center 2xl:gap-x-[2.5vw] lg:gap-x-[3vw]  items-center gap-x-3 overflow-hidden md:gap-x-6 '>

                <div className='logo -mt-[1vw] md:mt-0'>
                    <svg className='w-15 h-15 sm:w-[10vw] sm:h-[10vw] px-2 2xl:w-[8vw] 2xl:h-[8vw] lg:w-[7vw] lg:h-[7vw]' width="65.8" height="22.4" viewBox="0 0 94 32" xmlns="http://www.w3.org/2000/svg"><path d="M68.417 23.745c-.389-4.387-4.109-5.48-7.74-6.693-3.282-1.097-6.366-1.368-6.696-3.719-.354-2.495 2.097-4.174 4.664-3.722 2.783.492 3.311 2.635 2.668 4.023 1.284 1.59 4.473 1.426 5.453.314.808-.909 1.08-2.412-.614-3.838-2.074-1.748-6.331-2.582-10.409-1.818-4.008.752-7.182 3.433-6.823 7.334.387 4.196 3.376 5.415 8.109 6.679 4.58 1.224 6.08 2.852 5.781 4.978-.267 1.902-1.883 3.46-5.337 3.06-3.455-.402-5.271-3.045-4.566-6.033-3.934-.904-5.633 2.973-2.355 5.526 3.154 2.463 9.348 2.674 12.839 1.342 3.129-1.185 5.385-3.367 5.026-7.433ZM41.685 6.845c2.138 0 3.87-1.533 3.87-3.423 0-1.889-1.732-3.422-3.87-3.422s-3.87 1.531-3.87 3.422c0 1.892 1.732 3.423 3.87 3.423ZM44.735 8.717a7.496 7.496 0 0 1-6.1 0v22.595h6.114V8.72l-.014-.002ZM84.762 8.042a9.828 9.828 0 0 0-5.932 1.924V.679h-6.272v30.629h6.249V17.119c0-3.604.553-5.31 2.37-6.674 1.65-1.237 3.979-1.018 5.247-.132 1.53 1.07 1.462 3.635 1.462 5.681v15.317H94v-15.41c0-5.5-3.736-7.859-9.238-7.859ZM28.085 31.312H21.97l-4.804-13.984-3.393 13.979H7.656L0 8.719h6.279l6.482 19.545c2.32-6.55 3.773-12.656 1.52-19.545h6.114l7.69 22.593ZM30.626 8.009a23.382 23.382 0 0 1-5.1 6.21 25.452 25.452 0 0 1 5.1 8.278 25.483 25.483 0 0 1 5.106-8.278 23.425 23.425 0 0 1-5.106-6.21Z" fill="#1E1E1C"></path></svg>
                </div>

                <div className='search  px-[2.8vw] bg-gray-400 w-[50vw] cursor-pointer rounded-3xl flex rounded-tl-3xl rounded-bl-3xl items-center justify-center gap-0 sm:w-[50vw] md:px-[1vw]  md:w-[50vw] lg:w-[50vw] lg:px-2 '>
                    <input type="text" placeholder='Search..' className='w-[90%] md:h-[95%] text-black placeholder:text-black bg-gray-400 outline-none border-0 border-transparent sm:text-[3vw] lg:py-1 2xl:py-[0.5vw]  md:text-[1.5vw]' />
                    <IoIosSearch className='w-[5vw] h-[6vw] bg-transparent md:w-6 md:h-7 md:m-0 md:p-0 lg:w-[2vw] lg:h-[2vw]' />
                </div>

                <div className="bell hidden md:block">
                    <GoBell className='w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw]  md:w-[3vw] md:h-[3vw] lg:w-[2.5vw] lg:h-[2.5vw] ' />
                </div>

                <div className="heart hidden md:block">
                    <FiHeart className='w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw]  md:w-[3vw] md:h-[3vw] lg:w-[2.5vw] lg:h-[2.5vw]  ' />
                </div>

                <div className="cart">
                    <Link to="/cart" >
                    <BsCart3 className=' block
                    w-[6vw] h-[6vw] sm:w-[4vw] sm:h-[4vw]  md:w-[3vw] md:h-[3vw] lg:w-[2.5vw] lg:h-[2.5vw] ' color='black' />
                    </Link>
                </div>

                <div className='login hidden sm:block'>
                    <Link to="/register" className='bg-blue-700 text-white xl:text-[1.5vw] 2xl:py-[1vw] rounded-2xl px-[1vw] py-[1vw] lg:py-1 text-[3.5vw] sm:text-[2vw] lg:text-lg sm:py-[0.6vw] sm:px-[1vw] sm:tracking-tighter sm:whitespace-nowrap md:text-[2vw] md:block'>
                        Sign In
                    </Link>
                </div>

                <div className='login block'>
                    <Link to="/login" className='bg-blue-700 block xl:text-[1.5vw] 2xl:py-[1vw] text-white rounded-xl lg:rounded-3xl px-1 lg:py-1 font-normal lg:text-lg sm:text-[2vw] sm:py-[0.6vw] sm:px-[1vw] sm:tracking-tighter whitespace-nowrap md:text-[2vw] md:block'>
                        Log In
                    </Link>
                </div>

                <div className="menu block md:hidden">
                    <IoMenu className='w-8 h-8 sm:w-10 sm:h- md:hidden ' />
                </div>

            </div>




            {/* // ----------  Upper part of navbar ------------ // */}


            <div className='upper min-w-full h-2/4  '>
                <ul className='flex flex-row xl:justify-center md:px-10 gap-x-6  2xl:gap-x-[2vw]  sm:gap-x-6 md:gap-x-4 lg:gap-x-6 xl:gap-x-4 overflow-x-scroll xl:overflow-hidden '>
                    {list.map((item, index) => (
                        <li key={index} className='px-1 py-0.5 bg-gray  text-black flex items-center justify-center'>
                            {index === 0 ? (
                                <FaStar className='block w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 2xl:w-[1.5vw] 2xl:h-[1.5vw] ' color='rgb(255, 213, 96)' />
                            ) : null}
                            {index === 1 ? (
                                <BsTags className='w-6 h-6 bg-orange-700 rounded-full sm:w-5 sm:h-5 md:w-6 md:h-6 2xl:w-[1.5vw] 2xl:h-[1.5vw]  ' color='white' />
                            ) : null}
                            {index === 2 ? (
                                <GoClock className='block w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 2xl:w-[1.5vw] 2xl:h-[1.5vw]  ' color='blue' />
                            ) : null}
                            <NavLink
                                to="/"
                                className='second sm:pl-1 tracking-tighter  2xl:text-[1.5vw]  2xl:py-[1vw] text-lg sm:text-[1.5rem] md:text-lg lg:text-lg xl:text-lg whitespace-nowrap font-medium block duration-200 border-b-5 border-transparent hover:border-b-black'
                                activeClassName='text-black'
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    )
}

export default Navbar;
