'use client';
import { useEffect, useState } from "react";
import { FaYoutube, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(true);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(true);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDropdownOpen1(window.innerWidth > 700);
            setIsDropdownOpen2(window.innerWidth > 700);
            setIsDropdownOpen3(window.innerWidth > 700);
        };

        // Set initial state
        handleResize();
        // Add event listener for resizing
        window.addEventListener('resize', handleResize);
        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleDropdown1 = () => {
        if (window.innerWidth < 700) {
            setIsDropdownOpen1(!isDropdownOpen1);
        }
    };
    const toggleDropdown2 = () => {
        if (window.innerWidth < 700) {
            setIsDropdownOpen2(!isDropdownOpen2);
        }
    };
    const toggleDropdown3 = () => {
        if (window.innerWidth < 700) {
            setIsDropdownOpen3(!isDropdownOpen3);
        }
    };
    return (
        <footer className="mt-5">
            <div className="bg-gray-800 w-full flex flex-col justify-start min-sm:items-center p-5 md:flex-row">
                <div className="p-5 min-sm:mb-6 md:mb-0 md:w-1/4">
                    <p className={`text-white font-bold text-2xl pb-4 ${!isDropdownOpen1 ? 'cursor-pointer' : ''}`}
                        onClick={toggleDropdown1}>
                        Product
                    </p>
                    {isDropdownOpen1 && (
                        <ul className="text-zinc-300">
                            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Stocks
                            </li>
                            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Futures & Options
                            </li>
                            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Mutual Funds
                            </li>
                            <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Fixed deposits
                            </li>
                        </ul>
                    )}
                </div>
                <div className="p-5 min-sm:mb-6 md:mb-0 md:w-1/4">
                    <p className={`text-white font-bold text-2xl pb-4 ${!isDropdownOpen1 ? 'cursor-pointer' : ''}`}
                        onClick={toggleDropdown2}>
                        Company
                    </p>
                    {isDropdownOpen2 && (
                        <ul>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                About
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Products
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Pricing
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Careers
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Press & Media
                            </li>
                        </ul>
                    )}

                </div>
                <div className="p-5 min-sm:mb-6 md:mb-0 md:w-1/4">
                    <p className={`text-white font-bold text-2xl pb-4 ${!isDropdownOpen1 ? 'cursor-pointer' : ''}`}
                        onClick={toggleDropdown3}>
                        Support
                    </p>
                    {isDropdownOpen3 && (

                        <ul>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Contact
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Support Portals
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                List Of Charges
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Downloads & Resources
                            </li>
                            <li className="text-zinc-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                                Videos
                            </li>
                        </ul>
                    )}
                </div>
                <div className="p-5 md:w-1/4">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Social media</p>
                        <li className="flex gap-6 pb-5">
                            <FaInstagram className="text-white bg-pink-500 text-2xl cursor-pointer hover:text-yellow-600 p-1 rounded" />
                            <FaTwitter className="text-white bg-[#55acee] text-2xl cursor-pointer hover:text-blue-600 p-1 rounded" />
                            <FaLinkedin className="text-white bg-[#0a66c2] text-2xl cursor-pointer hover:text-blue-600 p-1 rounded" />
                            <FaYoutube className="text-white bg-[#b00] text-2xl cursor-pointer hover:text-red-600 p-1 rounded" />
                            <FaFacebook className="text-white bg-[#1877f2] text-2xl cursor-pointer hover:text-blue-600 p-1 rounded" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-800">
                <div className="border-t-2 border-indigo-500 w-[80%]">
                    <h1 className="text-white font-semibold mt-4">
                        Copyright © 2021-2023 IslandNomad.com All rights reserved.
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
