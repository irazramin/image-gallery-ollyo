import React from 'react';

const Checkbox = ({ classes = "", checked = false, onChange }) => {
    return <input type="checkbox" className={`w-[18px] h-[18px] ${classes}`} checked={checked} onChange={onChange}/>
};

export default Checkbox;