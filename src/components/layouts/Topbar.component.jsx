import React, {useRef, useState} from 'react';
import {BiLogOutCircle, BiSearch} from "react-icons/bi";
import profile from "../../assests/image-11.jpeg"
import logo from "../../assests/logo.png"
import {BsChevronRight} from "react-icons/bs";
import SearchHistoryComponent from "../dropdown/SearchHistory.component";
import {FaUserCheck} from "react-icons/fa";
import {IoSettings} from "react-icons/io5";

const TopbarComponent = () => {
    const inputRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleSearchInputFocus = () => {
        setShowDropdown(true);
    }

    const handleSearchInputBlur = () => {
        setShowDropdown(false);
    }

    const handleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    }

    return (
        <div
            className="shadow-[0_0px_8px_rgb(0,0,0,0.1)] bg-white p-5 min-h-[80px] flex items-center sticky top-0 z-50 duration-300 transition-all">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 w-full place-items-center place-content-between gap-3 lg:gap-5">
                    <div className="md:col-span-2 col-span-6 md:order-1">
                        <img className="h-[50px] w-[220px] object-cover" src={logo} alt=""/>
                    </div>
                    <div className="w-full md:col-span-8 col-span-12 flex items-center md:order-2 order-3 md:mt-0">
                        <div
                            className={`${showDropdown ? 'bg-white border' : 'bg-neutral-100'} transition-all duration-300 w-full p-[12px]  flex items-center rounded-2xl relative md:block`}>
                            <BiSearch
                                className="text-xl absolute text-gray-400 left-[15px] top-[50%] -translate-y-[50%]"/>
                            <input onBlur={handleSearchInputBlur} onFocus={handleSearchInputFocus} type="text"
                                   placeholder="Search"
                                   className="pl-8 text-gray-800 font-semibold w-full h-full bg-transparent outline-none placeholder:text-sm"/>
                            <div
                                className={`${showDropdown ? 'block' : 'hidden'} transition-all duration-500 ease-in-out absolute w-full bg-white lg:min-h-[300px] md:min-h-[400px] min-h-[300px] top-[60px] md:-bottom-[310px] left-0 shadow-[0_0px_8px_rgb(0,0,0,0.1)] rounded-md`}>
                                <SearchHistoryComponent/>
                            </div>

                        </div>
                    </div>
                    <div className="md:col-span-2 col-span-6 relative md:order-3 order-2 z-50">
                        <div onClick={handleProfileDropdown}
                             className="flex justify-end items-center gap-2 lg:gap-3 cursor-pointer">
                            <img className="w-[30px] h-[30px] rounded-md lg:ml-10" src={profile} alt=""/>
                            <div className="md:flex items-center gap-1 lg:gap-2 hidden">
                                <h4 className="text-gray-500 text-[13px]">John Deo</h4>
                                <BsChevronRight className="text-gray-500 text-xs mt-1"/>
                            </div>
                        </div>

                        {showProfileDropdown && <div
                            className="absolute w-[150px] bg-white rounded min-h-[110px] top-[35px] -left-[40px] md:-left-[10px] shadow-[0_0px_2px_rgb(0,0,0,0.1)]">
                            <ul className="p-4">
                                <li className="flex items-center gap-3 text-gray-600">
                                    <FaUserCheck/>
                                    <span className="text-[13px] font-semibold">My Profile</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 pt-4">
                                    <IoSettings/>
                                    <span className="text-[13px] font-semibold">Setting</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-600 pt-4">
                                    <BiLogOutCircle/>
                                    <span className="text-[13px] font-semibold">Sign out</span>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className="mt-3 ml-6 md:block hidden">
                    <ul className="flex items-center gap-5">
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Smart
                            Watch
                        </li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Car</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Headphone</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Phone</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Architecture
                            & Interiors
                        </li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Fashion
                            & Beauty
                        </li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Travel</li>
                        <li className="text-neutral-600 text-[15px] cursor-pointer hover:text-black transition-all duration-200">Bike</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default TopbarComponent;