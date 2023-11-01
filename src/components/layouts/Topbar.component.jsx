import React, {useRef, useState} from 'react';
import {BiSearch} from "react-icons/bi";
import profile from "../../assests/image-11.jpeg"
import logo from "../../assests/logo.png"
import {BsChevronRight} from "react-icons/bs";

const TopbarComponent = () => {
    const inputRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearchInputFocus = () => {
        setShowDropdown(true);
    }

    const handleSearchInputBlur = () => {
        setShowDropdown(false);
    }

    return (
        <div
            className="shadow-[0_0px_8px_rgb(0,0,0,0.1)] bg-white p-5 min-h-[80px] flex items-center sticky top-0 z-50 duration-300 transition-all">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 w-full place-items-center place-content-between">
                    <div className="col-span-2 ">
                        <img className="h-[50px] w-[220px] object-cover" src={logo} alt=""/>
                    </div>
                    <div className="w-full col-span-8 flex items-center ">
                        <div className={`${showDropdown ? 'bg-white border' : 'bg-neutral-100'} transition-all duration-300 w-full p-[12px]  flex items-center rounded-2xl relative md:block`}>
                            <BiSearch className="text-xl absolute text-gray-400 left-[15px] top-[50%] -translate-y-[50%]"/>
                            <input onBlur={handleSearchInputBlur} onFocus={handleSearchInputFocus} type="text"
                                   placeholder="Search"
                                   className="pl-8 text-gray-800 font-semibold w-full h-full bg-transparent outline-none placeholder:text-sm"/>
                            <div
                                className={`${showDropdown ? 'block' : 'hidden'} transition-all duration-300 absolute w-full bg-white min-h-[300px] -bottom-[310px] left-0 shadow-[0_0px_8px_rgb(0,0,0,0.1)] rounded-md`}>

                            </div>

                        </div>
                    </div>
                    <div className="col-span-2 flex justify-end items-center gap-3">
                        <img className="w-[30px] h-[30px] rounded-md mr-auto" src={profile} alt=""/>
                        <div className="flex items-center gap-2">
                            <h4 className="text-gray-500 text-sm">John Deo</h4>
                            <BsChevronRight className="text-gray-500 text-xs mt-1" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 ml-5">
                    <ul className="flex items-center gap-5">
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Smart Watch</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Car</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Headphone</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Phone</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Architecture & Interiors</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Fashion & Beauty</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Travel</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Bike</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default TopbarComponent;