import React, {useState} from 'react';
import {SortableElement} from "react-sortable-hoc";
import Checkbox from "../inputs/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {removeImage, selectedImage} from "../../redux/reducers/SelectedImageSlice";
import {HiOutlineDownload} from "react-icons/hi";
import profile from "../../assests/image-11.jpeg"
import {MdOutlineFavorite} from "react-icons/md";
const SortableItemComponent = SortableElement(({value, position, itemKey}) => {
    const dispatch = useDispatch();
    const [checkedImage, setCheckedImage] = useState(false);
    const render = useSelector((state) => state.selectedImage.render);

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
    }
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    return (
        <div
            className={`${position === 0 ? 'md:col-span-2 row-span-2' : 'md:col-span-2 lg:col-span-1'} group hover:border-0 shadow-[rgba(50,_50,_90,_0.25)_0px_2px_5px_-1px,_rgba(0,_0,_0,_0.03)_0px_1px_3px_-1px]  border-2 border-transparent h-full rounded-2xl overflow-hidden cursor-pointer relative transition-all duration-300 hover:scale-95`}>
            <div
                className={`${!checkedImage ? 'group-hover:bg-gray-900 group-hover:bg-opacity-70 group-hover:duration-500' : 'bg-gray-900 bg-opacity-30'} w-full h-full absolute top-0 left-0`}>
                <div className={`${!checkedImage ? 'group-hover:block hidden' : '!block'} w-full h-full relative`}>
                    <Checkbox
                        classes={`  absolute top-[15px] left-[15px] cursor-pointer`}
                        onChange={(e) => handleCheckbox(e, itemKey)} checked={checkedImage}/>
                    <div
                        className={`flex items-center justify-center absolute bottom-[15px] right-[15px] cursor-pointer bg-white w-[35px] h-[30px] rounded-md`}>
                        <div className="w-full h-full flex items-center justify-center">
                            <button className="">
                                <HiOutlineDownload className="font-semibold text-lg"/>
                            </button>
                        </div>
                    </div>
                    <div
                        className={`flex items-center justify-center absolute bottom-[60px] right-[15px] cursor-pointer bg-white w-[35px] h-[30px] rounded-md`}>
                        <div className="w-full h-full flex items-center justify-center">
                            <button className="">
                                <MdOutlineFavorite className="font-semibold text-lg"/>
                            </button>
                        </div>
                    </div>
                    <div className={`absolute bottom-[15px] left-[15px] flex items-center gap-2`}>
                        <img className="w-8 h-8 rounded-full " src={profile} alt=""/>
                        <h4 className="text-white text-[15px] font-medium">John Deo</h4>
                    </div>
                </div>
            </div>
            <img src={value} alt="image"/>
        </div>
    )
});

export default SortableItemComponent;