import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold">Company Name</p>
                    <p className="text-sm">123 Street Name, City, Country</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <ul className="flex flex-wrap justify-center md:justify-end">
                        <li className="mx-2"><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                        <li className="mx-2"><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
                        <li className="mx-2"><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
