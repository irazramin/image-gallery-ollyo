import React from 'react';
import {IoAnalytics} from "react-icons/io5";
import image10 from "../../assests/image-10.jpeg"
import image11 from "../../assests/image-11.jpeg"
import image9 from "../../assests/image-9.webp"

const SearchHistoryComponent = () => {
    return (
        <div className="w-full h-ful p-5">
            <div>
                <div>
                    <h4 className="text-gray-700 text-[15px]">Trending Search</h4>
                    <ul className="mt-2 flex items-center gap-2 flex-wrap">
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2">
                            <IoAnalytics className="mt-1"/>
                            <span className="text-sm text-gray-500">
                                product
                            </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2">
                            <IoAnalytics className="mt-1"/>
                            <span className="text-sm text-gray-500">
                                cat
                            </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2">
                            <IoAnalytics className="mt-1"/>
                            <span className="text-sm text-gray-500">
                                relax
                            </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2">
                            <IoAnalytics className="mt-1"/>
                            <span className="text-sm text-gray-500">
                                beauty
                            </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2">
                            <IoAnalytics className="mt-1"/>
                            <span className="text-sm text-gray-500">
                                photography
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h4 className="text-gray-700 text-[15px]">Trending Topic</h4>
                    <ul className="mt-2 flex items-center gap-2 flex-wrap">
                        <li className="rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                            <img className="w-8 h-9 object-fill" src={image10} alt=""/>
                            <div className="pr-3">
                                <span className="text-sm text-gray-500 mt-0">
                                    Travel
                                </span>
                            </div>
                        </li>
                        <li className="rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                            <img className="w-8 h-9 object-fill" src={image11} alt=""/>
                            <div className="pr-3">
                                <span className="text-sm text-gray-500 mt-0">
                                    People
                                </span>
                            </div>
                        </li>
                        <li className="rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                            <img className="w-8 h-9 object-fill" src={image9} alt=""/>
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
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                <span className="text-sm text-gray-500 mt-0">
                                    Astrophotography
                                </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                <span className="text-sm text-gray-500 mt-0">
                                    People
                                </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                <span className="text-sm text-gray-500 mt-0">
                                    Words to Inspire
                                </span>
                        </li>
                        <li className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 overflow-hidden">
                                <span className="text-sm text-gray-500 mt-0">
                                    Minimal Black and White
                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchHistoryComponent;