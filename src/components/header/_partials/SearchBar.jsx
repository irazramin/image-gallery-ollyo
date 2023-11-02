import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import image9 from "../../../assests/image-9.webp"
import image10 from "../../../assests/image-10.jpeg"
import image11 from "../../../assests/image-11.jpeg"
import DefaultCard from '../../shared/cards/DefaultCard';

const SearchBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearchInputFocus = () => {
        setShowDropdown(true);
    }

    const handleSearchInputBlur = () => {
        setShowDropdown(false);
    }

    return (
        <>
            <div
                className={`${showDropdown ? 'bg-white border' : 'bg-neutral-100'} transition-all duration-300 w-full p-[12px] flex items-center rounded-2xl relative md:block z-40 md:z-50`}>
                <BiSearch
                    className="text-xl absolute text-gray-400 left-[15px] top-[50%] -translate-y-[50%]" />
                <input onBlur={handleSearchInputBlur} onFocus={handleSearchInputFocus} type="text"
                    placeholder="Search"
                    className="pl-8 text-gray-800 font-semibold w-full h-full bg-transparent outline-none placeholder:text-sm" />
                <div className={`${showDropdown ? 'block' : 'hidden'} transition-all duration-500 ease-in-out absolute w-full bg-white top-[60px] left-0 shadow-[0_0px_8px_rgb(0,0,0,0.1)] rounded-md`}>
                    <div className="w-full p-5">
                        <div>
                            <h4 className="text-gray-700 text-[15px]">Trending Images</h4>
                            <ul className="mt-2 flex items-center gap-2 flex-wrap">
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <img className="w-8 h-9 object-fill" src={image10} alt="" />
                                    <div className="pr-3">
                                        <span className="text-sm text-gray-500 mt-0">
                                            Travel
                                        </span>
                                    </div>
                                </li>
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <img className="w-8 h-9 object-fill" src={image11} alt="" />
                                    <div className="pr-3">
                                        <span className="text-sm text-gray-500 mt-0">
                                            People
                                        </span>
                                    </div>
                                </li>
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <img className="w-8 h-9 object-fill" src={image9} alt="" />
                                    <div className="pr-3">
                                        <span className="text-sm text-gray-500 mt-0">
                                            Fashion & Beauty
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-gray-700 text-[15px]">Trending Collections</h4>
                            <ul className="mt-2 flex items-center gap-2 flex-wrap">
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <span className="text-sm text-gray-500 mt-0">
                                        Astrophotography
                                    </span>
                                </li>
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <span className="text-sm text-gray-500 mt-0">
                                        People
                                    </span>
                                </li>
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <span className="text-sm text-gray-500 mt-0">
                                        Words to Inspire
                                    </span>
                                </li>
                                <li className="cursor-pointer hover:bg-gray-100 transition-all duration-200 hover:scale-95 px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                    <span className="text-sm text-gray-500 mt-0">
                                        Minimal Black and White
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar