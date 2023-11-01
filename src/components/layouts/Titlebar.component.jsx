import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteSelectedImage} from "../../redux/reducers/SelectedImageSlice";

const TitlebarComponent = () => {
    const dispatch = useDispatch();
    const selectedImages = useSelector((state) => state.selectedImage.value);

    const handleDeleteImages = () => {
        dispatch(deleteSelectedImage(selectedImages));
    }
    return (
        <div className="flex items-center justify-between bg-white py-5 px-10 border-b rounded-t-xl shadow-sm lg:w-[85%] mx-auto">
            <div>
                {selectedImages.length > 0 && ( <div className="flex items-center gap-5">
                    <input className="mt-1 w-[18px] h-[18px] rounded-md" type="checkbox" checked={true}/>
                    <p className="font-semibold text-lg capitalize">{selectedImages.length} {selectedImages.length > 1 ? 'files' : 'file'} selected</p>
                </div>)}
                {!selectedImages.length && <p className="font-bold text-xl capitalize">Gallery</p>}
            </div>
            <div>
                {selectedImages.length > 0 && <button onClick={handleDeleteImages} className="text-red-500 font-medium hover:text-red-600 hover:underline duration-300">
                    Delete {selectedImages.length > 1 ? 'files' : 'file'}
                </button>}
            </div>
        </div>
    );
};

export default TitlebarComponent;