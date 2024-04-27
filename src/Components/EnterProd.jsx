import React, { useState } from "react";
import axios from "axios";

function EnterProd() {
  return (
    <div className='bg-gray-400 border text-black rounded-md h-[100vh] w-[100%] shadow-lg'>
      <div>
        <h1 className='text-4xl text-white font-bold text-center mb-4'>Register Product</h1>

        <form
          method="post"
          action="/storingProducts"
          encType="multipart/form-data"
          className=" "
        >
          <div className='relative my-4 flex flex-1 items-center'>
            <label htmlFor="productTitle" className='mr-[4vw] text-xl font-semibold'>Product Title:</label>
            <textarea required name="productTitle" id="productTitle" cols="50" rows="3" className='px-2 text-lg border-2 border-black placeholder-gray-800 rounded-xl'></textarea>
          </div>

          {/* <textarea type="text" name="productTitle" id="" /> */}
          <div className='relative my-4 flex flex-1 items-center'>
            <label htmlFor="productDescription" className='mr-[4vw] text-xl font-semibold'>Product Description:</label>
            <textarea required name="productDescription" id="productDescription" cols="50" rows="3" className='px-2 text-lg border-2 border-black placeholder-gray-800 rounded-xl'></textarea>
          </div>

          {/* <textarea type="text" name="productDescription" id="" /> */}

          <div className='relative my-6 flex flex-1'>
            <label htmlFor="productCategory" className='mr-16 text-black text-lg font-semibold'>Product Category</label>
            <select required id="productCategory" name="productCategory">
              <option value="clothes">Clothes</option>
              <option value="watches">Watches</option>
              <option value="health product">Health Product</option>
            </select>
          </div>

          {/* <select name="productCategory">
            <option value="Clothes">Clothes</option>
            <option value="Electronics">Electronics</option>
            <option value="Books">Books</option>
          </select> */}
          <div className='relative mt-2 flex flex-1'>
            <label htmlFor="productPrice" className='mr-16 text-black text-lg font-semibold'>Product Price</label>
            <span>
              <select required name="currency" id="currency" className='px-2 text-lg border-2 border-black placeholder-gray-800 rounded-xl'>
                <option value="$">$</option>
                <option value="PKR">PKR</option>
                <option value="INR">INR</option>
              </select>
              <input required type="number" name="productPrice" id="productPrice" className='px-2 text-lg border-2 border-black placeholder-gray-800 rounded-xl' />
            </span>
          </div>

          {/* <input type="number" name="productPrice" /> */}
          <div>
            <label htmlFor="productImage" className="block text-black text-lg font-semibold">Upload Images:</label>
            <input required type="file" id="productImage" name="productImage" accept="image/*" multiple className="border rounded-md" onChange={(e) => setImagePreviews(e.target.files)} />
          </div>

          {/* <input type="file" name="productImage" accept="image/*" multiple /> */}
          {/* <button type="submit">Submit</button> */}

          <div className='flex justify-center items-center'>
            <button type='submit' className='text-center text-xl font-semibold hover:bg-slate-900 overflow-hidden bg-zinc-700 px-6 py-2 my-2 rounded-3xl'>Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default EnterProd;
