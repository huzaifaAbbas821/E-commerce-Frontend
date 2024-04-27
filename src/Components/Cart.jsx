import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reduceItem } from '../redux/reducer';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

function Cart() {
  const carts = useSelector(state => state.cart.carts);
  const dispatch = useDispatch();
  const [quantityMap, setQuantityMap] = useState({}); // Quantity map for each item
  const [subtotal, setSubtotal] = useState(0);
  const tax = Math.round(subtotal * 0.18);
  const shipCharges = subtotal > 0 ? 200 : 0;
  const total = subtotal + tax + shipCharges;
  const discount = total > 1000 ? 100 : 0;

  useEffect(() => {
    // Calculate subtotal when carts or quantityMap change
    let newSubtotal = 0;
    carts.forEach(cart => {
      const itemSubtotal = cart.price * (quantityMap[cart.userid] || 1); // Get quantity for item or default to 1
      newSubtotal += itemSubtotal;
    });
    setSubtotal(newSubtotal);
  }, [carts, quantityMap]);

  const handleDecrease = (userid) => {
    const updatedQuantity = Math.max(quantityMap[userid] - 1, 1); // Ensure quantity doesn't go below 1
    setQuantityMap(prevQuantityMap => ({
      ...prevQuantityMap,
      [userid]: updatedQuantity,
    }));
  };

  const handleIncrease = (userid) => {
    setQuantityMap(prevQuantityMap => ({
      ...prevQuantityMap,
      [userid]: (prevQuantityMap[userid] || 0) + 1,
    }));
  };

  const handleRemove = (userid) => {
    dispatch(reduceItem(userid));
    setQuantityMap(prevQuantityMap => {
      const newQuantityMap = { ...prevQuantityMap };
      delete newQuantityMap[userid]; // Remove quantity entry for removed item
      return newQuantityMap;
    });
  };

  return (
    <div className='h-screen w-full flex flex-row justify-between items-stretch gap-12 bg-gray-600 text-gray-100'>
      <main className='w-[70%] overflow-y-auto'>
        <h1 className='text-7xl font-medium items-end text-center m-auto'>Cart</h1>
        {carts.length === 0 || isEmptyObject(carts) ? (
          <div className='text-3xl text-normal text-center mt-10' > The cart is empty </div>
        ) : (
          carts.map((cart) => (
            <div key={cart.userid} className=' p-4 flex flex-row justify-start items-center gap-8'>
              <img src={cart.activeimg} alt="item" className='w-40 h-40 object-contain rounded-md' />
              <article className='flex flex-col justify-center items-start gap-1'>
                <span className='text-2xl font-semibold'>{cart.title}</span>
                <span className='text-xl font-medium'>${cart.price}</span>
              </article>
              <div className='ml-auto flex justify-center items-center gap-3'>
                <button className='border-none px-2 font-bold text-2xl rounded-md hover:bg-white hover:text-black' onClick={() => handleDecrease(cart.userid)}>-</button>
                <p className='text-2xl font-bold'>{quantityMap[cart.userid] || 1}</p>
                <button className='border-none px-2 font-bold text-2xl text-white rounded-md hover:bg-white hover:text-black' onClick={() => handleIncrease(cart.userid)}>+</button>
              </div>
              <button className='border-none bg-transparent flex cursor-pointer text-[1.2rem] hover:text-red-700' onClick={() => handleRemove(cart.userid)}><FaTrash /></button>
            </div>
          ))
        )}
      </main>
      <aside className='w-[30%] p-12 border-transparent border-l-2 border-l-white flex flex-col justify-center items-start gap-6'>
        <p className='text-[1.1rem]'>SubTotal: ${subtotal}</p>
        <p className='text-[1.1rem]'>Shipping Charges: ${shipCharges}</p>
        <p className='text-[1.1rem]'>Tax: ${tax}</p>
        <p className='text-[1.1rem] text-red-400'>Discount: <em> - ${discount}</em></p>
        <p className='text-[1.1rem]'><b>Total: ${total - discount}</b></p>
        <Link to='/'>
          <button className='bg-green-700 p-4 rounded-md hover:opacity-80'>CheckOut</button>
        </Link>
      </aside>
    </div>
  );
}

export default Cart;
