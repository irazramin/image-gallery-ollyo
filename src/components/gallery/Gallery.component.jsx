import React from 'react';
import data from '../../data/imageData'
import imgIcon from "../../assests/img-icon.png"

const GalleryComponent = () => {

    return (
        <div className="bg-white py-5 px-10 border-b rounded-b-xl shadow-sm lg:w-[75%] mx-auto">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-5 auto-cols-max">
                {
                    data.map((item, idx) => {
                        return (
                            <div key={idx}
                                 className={`${idx === 0 ? 'md:col-span-2 row-span-2' : ''} border-2 border-gray-200 h-full rounded-lg overflow-hidden cursor-pointer relative`}>
                                <div className="bg-gray-900 w-full h-full absolute top-0 left-0 bg-opacity-30">

                                </div>
                                <img className="" src={item} alt=""/>
                            </div>
                        )
                    })
                }
                <div
                    className="w-[200px] h-[200px] p-3 border-2 border-gray-300 h-full w-full overflow-hidden rounded-lg border-dashed flex flex-col justify-center items-center">
                    <img className="w-[35px] h-[35px]" src={imgIcon} alt="icon"/>
                    <p className="text-xl font-semibold mt-3 text-gray-600">Add Images</p>
                </div>

            </div>

        </div>
    );
};

export default GalleryComponent;