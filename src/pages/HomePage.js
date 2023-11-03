import React, { useEffect, useState } from 'react';
import AppLayout from '../components/layouts/AppLayout';
import GalleryList from '../components/gallery/GalleryList';
import { useDispatch, useSelector } from 'react-redux';
import { arrayMove } from 'react-sortable-hoc';
import mockData from "../data/mock"
import { deleteAllImages, deleteSelectedImage, selectAllImage } from '../redux/reducers/SelectedImageSlice';
import { RiDeleteBin5Line } from "react-icons/ri";

const HomePage = () => {
    const dispatch = useDispatch();
    const selectedImages = useSelector((state) => state.selectedImage.value);
    const allManupulateData = useSelector((state) => state.selectedImage.allData);
    const [imgData, setImgData] = useState(mockData);
    const render = useSelector((state) => state.selectedImage.render);
    const selectAllImagesValue = useSelector((state) => state.selectedImage.selectAllImage);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setImgData(({ images }) => ({
            images: arrayMove(images, oldIndex, newIndex),
        }));
    };

    useEffect(() => {
        // if users delete image from the gallery, rest images will add in the state

        if (allManupulateData.length > 0) {
            setImgData({ images: allManupulateData });
        }
    }, [render, allManupulateData]);

    const handleAllSelectImages = () => {
        // if users want to select all the images, it will call. (which is appear when user select an image)

        dispatch(selectAllImage(true));
    }

    const handleDeleteImages = () => {
        // if users want to delete all the images, it will call. (which is appear when user select an image)

        if (selectAllImagesValue) {
            dispatch(deleteAllImages())
        } else {
            dispatch(deleteSelectedImage({ current: imgData, selectedImages: selectedImages }));
        }
    }

    return (
        <AppLayout>
            <div className='container mx-auto px-5 lg:px-0 my-5'>
                <div className="flex items-center justify-between h-[70px] rounded-xl mx-auto mb-5">
                    <p className="font-bold md:text-xl capitalize">{imgData.images.length} {imgData.images.length <= 1 ? 'image' : 'images'} available</p>
                    <div className="flex items-center justify-end">
                        <div className="mr-5">
                            {selectedImages.length > 0 && (
                                <div className="flex items-center md:gap-3 gap-1">
                                    <input onChange={handleAllSelectImages} className="md:mt-1 w-[18px] h-[18px] rounded-md" type="checkbox" checked={selectAllImagesValue} />
                                    <p className="font-semibold md:text-lg text-sm capitalize">{selectedImages.length} {selectedImages.length > 1 ? 'files' : 'file'} selected</p>
                                </div>
                            )}
                        </div>
                        <div>
                            {selectedImages.length > 0 && (
                                <button onClick={handleDeleteImages}
                                    className="md:min-w-[120px] text-white md:px-[15px] md:py-[11px] px-[12px] py-[9px] rounded-xl text-sm bg-rose-500 font-semibold hover:bg-red-600 duration-300 flex items-center gap-[5px]">
                                    <RiDeleteBin5Line />
                                    <span className="md:block hidden">
                                        Delete {selectedImages.length > 1 ? 'files' : 'file'}
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <GalleryList items={imgData.images} onSortEnd={onSortEnd} axis="xy" />
            </div>
        </AppLayout>
    );
};

export default HomePage;