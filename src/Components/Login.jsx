import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorUser, setErrorUser] = useState('');

    const handleLogin = (e) => {

        if (!username) {
            setErrorUser('Complete the above field.');
            e.preventDefault();
            return;
        }
        else {
            const msg1 = document.querySelector('.msg1');
            msg1.style.display = 'none'
        }
        if (!password) {
            setErrorMessage('Complete the above field.');
            e.preventDefault();
            return;
        }
        else {
            const msg2 = document.querySelector('.msg2');
            msg2.style.display = 'none'
        }

    };
    return (
        <div className='bg-slate-900 border text-white border-slate-400 rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-30  relative' >
            <div>
                <h1 className='text-4xl text-white font-bold text-center mb-6' >LOGIN</h1>
                <form action='authorization' method='post' onSubmit={handleLogin}>
                    <div className='relative my-4'>
                        <label htmlFor="" > Username </label>
                        <input type="text" placeholder='Username' className='block w-72 py-2.3 px-3 text-sm bg-transparent border-2 py-1 placeholder-gray-400 rounded-xl border-gray-300 peer appearance-none  focus:outline-none focus:text-white focus:ring-0 '
                        name='userName' value={username} onChange={(e) => setUsername(e.target.value)}  
                         />
                    </div>

                    {errorUser && <div className=' msg1 text-orange-400'>{errorUser}</div>}
                    <div className='relative my-4' >
                        <label htmlFor="" > Password </label>
                        <input type="password" name='Password'
                         placeholder='Password' className='block w-72 py-2.3 px-3 text-sm bg-transparent border-2 py-1 placeholder-gray-400 rounded-xl border-gray-300 peer appearance-none  focus:outline-none focus:text-white focus:ring-0 ' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>

                    {errorMessage && <div className='msg2 text-orange-400'>{errorMessage}</div>}
                    <div className='flex justify-center items-center' >
                        <button type='submit' className='text-center text-xl font-semibold   hover:bg-slate-900 overflow-hidden bg-zinc-400 px-6 py-2 my-2 rounded-3xl' >Login</button>
                    </div>
                    <div>
                        <span>New Here? <Link to='/register' className=' cursor-pointer hover:border-b-2 hover:border-gray-400' > Create an Account </Link> </span>
                    </div>



                </form>
            </div>
        </div>
    )
}

export default Login
