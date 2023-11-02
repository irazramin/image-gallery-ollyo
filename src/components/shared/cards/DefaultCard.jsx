import React from 'react'

const DefaultCard = ({ children }) => {
  return (
    <div className="shadow-[0_0px_8px_rgb(0,0,0,0.1)] bg-white p-5 min-h-[80px] flex items-center sticky top-0 z-50 duration-300 transition-all">
        {children}
    </div>
  )
}

export default DefaultCard