import React, {useState} from 'react';

const NavbarComponent = () => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <div className="flex items-center justify-between bg-white py-5 px-10 border-b rounded-t-xl shadow-sm lg:w-[75%] mx-auto">
            <div>
                {isSelected &&  <div className="flex items-center gap-3">
                    <input className="mt-1 w-[18px] h-[18px]" type="checkbox" checked={true}/>
                    <p className="font-semibold text-lg capitalize">3 files selected</p>
                </div>}
                {!isSelected && <p className="font-bold text-xl capitalize">Gallery</p>}
            </div>
            <div>
                {isSelected && <button className="text-red-500 font-medium hover:text-red-600 hover:underline duration-300">
                    Delete files
                </button>}
            </div>
        </div>
    );
};

export default NavbarComponent;