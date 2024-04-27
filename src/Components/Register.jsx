import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errorConfirm, setErrorConfirm] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
      
        if (password !== confirm) {
          setErrorConfirm("The passwords do not match.");
          return;
        }
      
        try {
          const response = await axios.post(
            "storingdata",
            {
              userName: username,
              FullName: name,
              password: password,
            },
            {
              headers: {
                authorization: `Bearer ${import.meta.env.VITE_LOGIN_KEY}`,
              },
            }
          );
          setSuccessMessage(response.data.message);
          window.location.href = "/";
        } catch (error) {
          setErrorConfirm(error.response.data.message);
        }
      };
      

    return (
        <div className='bg-slate-900 border text-white border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30  relative'>
            <div>
                <h1 className='text-4xl text-white font-bold text-center mb-3'>Register</h1>

                {successMessage && <div className='text-green-500 mb-4'>{successMessage}</div>}

                <form onSubmit={handleRegister}>
                    <div className='relative my-4'>
                        <label htmlFor='username'>Username</label>
                        <input
                            required
                            type='text'
                            placeholder='Username'
                            className='block w-72 py-2.3 px-3 text-sm bg-transparent border-2 py-1 placeholder-gray-400 rounded-xl border-gray-300 peer appearance-none focus:outline-none focus:text-white focus:ring-0'
                            value={username}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\s/g, ''); // Remove spaces from input
                                setUsername(value);
                            }}
                        />
                    </div>
                    <div className='relative my-4'>
                        <label htmlFor='name'>Full Name</label>
                        <input
                            required
                            type='text'
                            placeholder='Full Name'
                            className='block w-72 py-2.3 px-3 text-sm bg-transparent border-2 py-1 placeholder-gray-400 rounded-xl border-gray-300 peer appearance-none focus:outline-none focus:text-white focus:ring-0'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='relative my-4'>
                        <label htmlFor='password'>Password</label>
                        <input
                            required
                            type='password'
                            placeholder='Password'
                            className='block w-72 py-2.3 px-3 text-sm bg-transparent border-2 py-1 placeholder-gray-400 rounded-xl border-gray-300 peer appearance-none focus:outline-none focus:text-white focus:ring-0'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='relative my-4'>
                        <label htmlFor='confirm'>Confirm Password</label>
                        <input
                            required
                            type='password'
                            placeholder='Confirm Password'
                            className='block w-72 py-2.3 px-3 text-sm bg-transparent border-2 py-1 placeholder-gray-400 rounded-xl border-gray-300 peer appearance-none focus:outline-none focus:text-white focus:ring-0'
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                        {errorConfirm && <div className='text-red-500'>{errorConfirm}</div>}
                    </div>

                    <div className='flex justify-center items-center'>
                        <button type='submit' className='text-center text-xl font-semibold hover:bg-slate-900 overflow-hidden bg-zinc-400 px-6 py-2 my-2 rounded-3xl'>
                            Submit
                        </button>
                    </div>
                    <div>
                        <span className='capitalize'>
                            Already Have an account?
                            <Link to='/login' className='ml-2 cursor-pointer hover:border-b-2 hover:border-gray-400'>
                                Login
                            </Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;

