import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Cards from "./Cards";

function Container() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/getproducts", {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    
<div className='min-h-[100vh] xl:max-w-[100vw] w-screen bg-white text-white grid auto-rows-max  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2  xl:gap-x-[4em] xl:p-[2vw] py-5 sm:px-[2vw] gap-y-[3em] xl:px-[4vw] mt-[2vw] justify-items-center '>
{loading ? (
  <div>Loading...</div>
) : (
  data.map((product) => (
       <Cards key={product._id} product={product} />
  ))
)}
</div>

  );
}

export default Container;

