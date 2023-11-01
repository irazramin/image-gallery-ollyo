import React, {useEffect, useState} from 'react';
import data from '../../data/imageData'
import {arrayMove} from "react-sortable-hoc";
import SortableListComponent from "./SortableList.component";
import {useSelector} from "react-redux";

const GalleryComponent = () => {
    const [imgData, setImgData] = useState([]);
    const render = useSelector((state) => state.selectedImage.render);
    const onSortEnd = ({oldIndex, newIndex}) => {
        setImgData(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };

    useEffect(() => {
        setImgData(data);
    }, [render]);

    useEffect(() => {
        console.log(imgData)
    }, [imgData]);

    return (
        <div className="bg-white py-5 px-10 border-b rounded-b-xl shadow-[0px_0px_20px_4px_#edf2f7] lg:w-[85%] mx-auto relative">
            <SortableListComponent items={imgData.items} onSortEnd={onSortEnd} axis="xy"/>
        </div>
    );
};

export default GalleryComponent;