import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import Stars from './Stars';

function Cards({product}) {
  console.log(product)
    return (
        <div key={product._id} className='duration-300 2xl:w-[320px] 2xl:h-[400px] xl:w-[200px] xl:h-[250px] lg:w-[200px] lg:h-[250px] sm:w-[200px] sm:h-[230px] w-[120px] h-[200px] bg-black border-white text-white overflow-hidden rounded-xl sm:ml-0 ml-2'>
        <Link to={`/${product.userId}/${product.products._id}`}>
          <div className='image w-[100%] h-[60%] bg-black z-10 rounded-t-xl overflow-hidden bg-contain'>
            <img src={product.products.images[0]} className='w-[100%] h-[100%]' alt={`image 0`} />
          </div>
          <div className='w-[100%]  m-1 my-0'>
            <div className='w-[100%] 2xl:text-[1.7vw] xl:text-[1vw] lg:text-[1vw] text-lg sm:my-1 2xl:py-[0.5vw] text-start'> {product.products.productTitle}</div>
            {/* <div className='w-[100%] flex items-center'>
              <span className='flex gap-1 items-start'>
                <FaStar className="lg:w-[1vw] lg:h-[1vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />
                <FaStar className="lg:w-[1vw] lg:h-[1vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />
                <FaStar className="lg:w-[1vw] lg:h-[1vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />
                <FaStar className="lg:w-[1vw] lg:h-[1vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />
                <FaStar className="lg:w-[1vw] lg:h-[1vw] md:w-[2vw] md:h-[2vw] w-[3vw] h-[3vw]" color='rgb(255, 213, 96)' />
              </span>
              <span className='xl:text-[1vw] lg:text-[1.2vw] items-center mx-4'>{product.products.rating}</span>
            </div> */}
            <Stars rating={product.products.rating} />
            <span className='w-[50%] xl:text-[1vw] lg:text-[1.2vw] sm:my-1'>{product.products.productPrice}</span>
          </div>
        </Link>
    </div>
    )
}

export default Cards
