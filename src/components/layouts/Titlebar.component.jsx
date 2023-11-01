import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteSelectedImage} from "../../redux/reducers/SelectedImageSlice";
import {RiDeleteBin5Line} from "react-icons/ri";

const TitlebarComponent = () => {
    const dispatch = useDispatch();
    const selectedImages = useSelector((state) => state.selectedImage.value);

    const handleDeleteImages = () => {
        dispatch(deleteSelectedImage(selectedImages));
    }
    return (
        <div className="flex items-center justify-between bg-white h-[70px] py-5  md:px-10 px-6 border-b rounded-t-xl shadow-[0px_-25px_20px_8px_#EBF4FF] lg:w-[85%] mx-auto">
            <div>
                {selectedImages.length > 0 && ( <div className="flex items-center md:gap-5 gap-3">
                    <input className="md:mt-1 w-[18px] h-[18px] rounded-md" type="checkbox" checked={true}/>
                    <p className="font-semibold md:text-lg text-base capitalize">{selectedImages.length} {selectedImages.length > 1 ? 'files' : 'file'} selected</p>
                </div>)}
                {!selectedImages.length && <p className="font-bold text-xl capitalize">Gallery</p>}
            </div>
            <div>
                {selectedImages.length > 0 && <button onClick={handleDeleteImages} className="md:min-w-[120px] text-white px-[15px] py-[11px] rounded-xl text-sm bg-rose-500 font-semibold hover:bg-red-600 duration-300 flex items-center gap-[5px]">
                    <RiDeleteBin5Line />
                    <span className="md:block hidden">
                        Delete {selectedImages.length > 1 ? 'files' : 'file'}
                    </span>
                </button>}
            </div>
        </div>
    );
};

export default TitlebarComponent;