import React, { useState } from 'react'
import filterData from '../../../data/mockFilterData'
import { useDispatch } from 'react-redux';
import { filterImages } from '../../../redux/reducers/SelectedImageSlice';

const CollectionList = () => {
    const dispatch = useDispatch();
    const [activeClass, setActiveClass] = useState(1);

    const handleFilter = (filter, index) => {
        if(filter.id == (index+1)) {
            setActiveClass(filter.id);
            dispatch(filterImages(filter.type))

        }
    }

    return (
        <ul className="flex items-center gap-5">
            {
                filterData.map((item, index) => {
                    return (
                        <li onClick={() => handleFilter(item, index)} key={item.id} className={`${(activeClass == item.id) ? 'text-neutral-900 font-bold' : 'text-neutral-600'} text-[15px] cursor-pointer hover:text-black hover:scale-95 transition-all duration-200 mr-3 relative`}>
                             {item.title}
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default CollectionList