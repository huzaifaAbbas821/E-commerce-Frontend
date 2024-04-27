import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


function Stars({ rating }) {

    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index} className='flex gap-1 items-start' >
                {
                    rating >= index + 1 ? (<FaStar className="lg:w-[0.9vw] lg:h-[0.9vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />)
                        : rating >= number ? (<FaStarHalfAlt className="lg:w-[0.9vw] lg:h-[0.9vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />)
                            : (<FaRegStar className="lg:w-[0.9vw] lg:h-[0.9vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />)
                }
            </span>
        )
    }) 

    return (
        <div className='w-[100%] flex justify-start items-center gap-1'>
        {ratingStar}
        <span className='xl:text-[1vw] lg:text-[1.2vw] items-center mx-4' > {rating} </span>
        </div>
    )
}

export default Stars
