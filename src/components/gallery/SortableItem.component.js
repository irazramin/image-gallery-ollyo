import React, {useEffect, useState} from 'react';
import {SortableElement} from "react-sortable-hoc";
import Checkbox from "../inputs/Checkbox";
import {useDispatch, useSelector} from "react-redux";
import {removeImage, selectedImage} from "../../redux/reducers/SelectedImageSlice";

const SortableItemComponent = SortableElement(({value, position, itemKey}) => {
    const dispatch = useDispatch();
    const [checkedImage, setCheckedImage] = useState(false);
    const render = useSelector((state) => state.selectedImage.render);

    const handleCheckbox = (e, id) => {
        console.log(e.target.checked)
        if(itemKey === id && e.target.checked) {
            setCheckedImage(!checkedImage);
            dispatch(selectedImage(id));
        }
        if(itemKey === id && !e.target.checked) {
            setCheckedImage(!checkedImage);
            dispatch(removeImage(id));
        }
    }

    return (
        <div
            className={`${position === 0 ? 'md:col-span-2 row-span-2' : ''} group border-2 border-gray-200 h-full rounded-lg overflow-hidden cursor-pointer relative`}>
            <div
                className={`${!checkedImage ? 'group-hover:bg-gray-900 group-hover:bg-opacity-60 group-hover:duration-500' : 'bg-gray-900 bg-opacity-30'} w-full h-full absolute top-0 left-0`}>
                    <Checkbox classes={`${!checkedImage ? 'group-hover:block' : '!block'} hidden m-[15px] cursor-pointer`} onChange={(e) => handleCheckbox(e, itemKey)} checked={checkedImage}/>
            </div>
            <img src={value} alt="image"/>
        </div>
    )
});

export default SortableItemComponent;