import React, { useState } from 'react'
import {FaUserCheck} from "react-icons/fa";
import {IoSettings} from "react-icons/io5";
import {BiLogOutCircle} from "react-icons/bi";
import profile from "../../../assests/image-11.jpeg"

const ProfileMenu = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    }

    return (
        <>
            <div onClick={handleProfileDropdown} className="flex justify-end items-center gap-2 lg:gap-3 cursor-pointer transition-all duration-300 active:scale-95">
                <img className="w-[30px] h-[30px] rounded-md lg:ml-10" src={profile} alt="Avatar" />
                <div className="md:flex items-center gap-1 lg:gap-2 hidden">
                    <h4 className="text-gray-500 text-[13px] hover:text-gray-800 duration-300 transition-all">John Doe</h4>
                </div>
            </div>

            {showProfileDropdown && (
                <div className="absolute w-[150px] bg-white rounded min-h-[110px] top-[50px] shadow-[0_0px_2px_rgb(0,0,0,0.1)] !z-50">
                    <ul>
                        <li className="flex items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 gap-3 p-3 text-gray-600">
                            <FaUserCheck />
                            <span className="text-[13px] font-semibold">My Profile</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 gap-3 p-3 text-gray-600 pt-4">
                            <IoSettings />
                            <span className="text-[13px] font-semibold">Setting</span>
                        </li>
                        <li className="flex items-center cursor-pointer hover:bg-gray-100 transition-all duration-300 gap-3 p-3 text-gray-600 pt-4">
                            <BiLogOutCircle />
                            <span className="text-[13px] font-semibold">Sign out</span>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default ProfileMenu