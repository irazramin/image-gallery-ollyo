import React from 'react'

const ActionButton = ({ Icon }) => {
    return (
        <>
            <button className="w-full h-full flex items-center justify-center">
                <Icon className="font-semibold text-lg" />
            </button>
        </>
    )
}

export default ActionButton