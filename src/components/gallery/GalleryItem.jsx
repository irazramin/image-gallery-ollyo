import React, { useState } from 'react'
import { SortableElement } from "react-sortable-hoc";
import Checkbox from "../../components/inputs/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { removeImage, selectedImage } from "../../redux/reducers/SelectedImageSlice";
import { HiOutlineDownload } from "react-icons/hi";
import profile from "../../assests/image-11.jpeg"
import { MdOutlineFavorite } from "react-icons/md";
import ActionButton from '../shared/buttons/ActionButton';
import { PiShareFatFill } from "react-icons/pi";

const GalleryItem = SortableElement(({ value, position, itemKey }) => {
    const dispatch = useDispatch();
    const [checkedImage, setCheckedImage] = useState(false);
    const render = useSelector((state) => state.selectedImage.render);
    const selectAllImages = useSelector((state) => state.selectedImage.selectAllImage);
    const date = new Date(value.uploadedAt);
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const handleCheckbox = (e, id) => {
        console.log(e.target.checked)
        if (itemKey === id && e.target.checked) {
            setCheckedImage(!checkedImage);
            dispatch(selectedImage(id));
        }
        if (itemKey === id && !e.target.checked) {
            setCheckedImage(!checkedImage);
            dispatch(removeImage(id));
        }

        console.log(id)
    }

    return (
        <div
            className={`${position === 0 ? 'md:col-span-2 row-span-2' : 'md:col-span-2 lg:col-span-1'} bg-white group shadow-[0px_5px_20px_8px_#EBF4FF] border-2 border-transparent h-full rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-300 hover:scale-90`}>
            <div className={`${!checkedImage ? 'group-hover:bg-gray-900 group-hover:bg-opacity-70 group-hover:duration-500' : 'bg-gray-900 bg-opacity-30'} w-full h-full absolute top-0 left-0`}>
                <div className={`${!checkedImage ? 'group-hover:block hidden' : '!block'} w-full h-full relative`}>
                    <Checkbox
                        classes={`absolute top-[15px] left-[15px] cursor-pointer`}
                        onChange={(e) => handleCheckbox(e, itemKey)} checked={checkedImage} />
                    <div className={`flex items-center justify-center absolute bottom-[15px] right-[15px] cursor-pointer bg-white w-[35px] h-[30px] rounded-md`}>
                        <ActionButton Icon={HiOutlineDownload} />
                    </div>
                    <div className={`flex items-center justify-center absolute bottom-[60px] right-[15px] cursor-pointer bg-white w-[35px] h-[30px] rounded-md`}>
                        <ActionButton Icon={MdOutlineFavorite} />
                    </div>
                    <div className={`flex items-center justify-center absolute bottom-[105px] right-[15px] cursor-pointer bg-white w-[35px] h-[30px] rounded-md`}>
                        <ActionButton Icon={PiShareFatFill} />
                    </div>
                    <div className={`absolute bottom-[15px] left-[15px] flex flex-col gap-1`}>
                        <h4 className="text-white text-sm font-medium">{value.fileName}</h4>
                        <p className='text-white text-sm'>Uploaded At: {formattedDate}</p>
                        <p className='text-white text-sm'>Size: {value.fileSize}</p>

                    </div>
                </div>
            </div>
            <img src={value.fileContent} alt="image" />
        </div>
    )
});

export default GalleryItem