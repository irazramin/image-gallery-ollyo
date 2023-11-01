import React from 'react';
import {SortableContainer} from "react-sortable-hoc";
import SortableItemComponent from "./SortableItem.component";
import imgIcon from "../../assests/img-icon.png";

const SortableListComponent = SortableContainer(({items}) => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            {items?.map((value, index) => (
                <SortableItemComponent key={value.id} index={index} value={value.img} position={index}
                                       itemKey={value.id}/>
            ))}
            <div
                className="w-[200px] h-[200px] p-3 border-2 border-gray-300 h-full w-full overflow-hidden rounded-lg border-dashed flex flex-col justify-center items-center">
                <img className="w-[35px] h-[35px]" src={imgIcon} alt="icon"/>
                <p className="text-xl font-semibold mt-3 text-gray-600">Add Images</p>
            </div>

        </div>
    );
});
export default SortableListComponent;