import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Stars from './Stars';
import { useDispatch } from "react-redux";
import { addItem } from '../redux/reducer.js';

export default function Product() {
  const { userid, prodid } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeimg, setActive] = useState();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/${userid}/${prodid}`, null, {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        setData(response.data);
        console.log(response.data);
        setActive(response.data.images[0]);
        setTitle(response.data.productTitle);
        setPrice(response.data.productPrice);

        setLoading(false);
      } catch (error) {
        setError(true);
        console.error("Error fetching data:", error.response.status);
        setErrorMessage(
          error.response.status.toString() + " " + error.response.statusText
        );
        setLoading(false);
      }
    };
    fetchData();
  }, [userid, prodid]);

  // const cartEnter = (e) => {
  //   dispatch(addItem(data));
  //   console.log("Added")
  // };

  return (
    <div className="flex flex-col justify-between lg:flex-row p-4 gap-6 lg:px-12 lg:h-screen lg:justify-around lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img src={activeimg} alt="" className="w-full sm:h-[50vh] aspect-square object-cover rounded-xl" />
        <div className="flex flex-row justify-between sm:justify-center md:items-center md:gap-6 lg:justify-between h-16 sm:h-[10vw]">
          {data.images &&
            data.images.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt={`Image ${imgIndex}`} className="w-16 h-16 sm:w-[10vw] sm:h-[8vw] rounded-md cursor-pointer" onClick={() => setActive(image)} />
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:gap-4 lg:gap-10 lg:w-[40%]">
        <div>
          <span className="text-[1.5vw]">{data.productCategory}</span>
          <h1 className="text-3xl md:text-[2vw] font-bold">{data.productTitle}</h1>
        </div>
        <p className="text-gray-500 md:text-[2vw] font-semibold">{data.productDescription}</p>
        <Stars rating={data.rating} />
        <h3 className="text-black font-semibold md:text-[2vw]">{data.productPrice}</h3>
        <button onClick={() => dispatch(addItem({title,price,activeimg,userid}))} className="bg-green-500 text-[1vw] text-yellow-50 font-semibold py-3 px-3 text-nowrap rounded-xl lg:w-[50%] h-full">Add to Cart</button>
        <Link to="/cart">
          <button className="bg-green-500 text-[1vw] text-yellow-50 font-semibold py-3 px-3 text-nowrap rounded-xl lg:w-[50%] h-full">Cart</button>
        </Link>
      </div>
    </div>
  );
}
