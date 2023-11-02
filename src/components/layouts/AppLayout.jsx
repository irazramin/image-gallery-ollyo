import React from 'react'
import Header from '../header/Header'

const AppLayout = ({ children }) => {
  return (
    <div className="bg-blue-50 bg-opacity-50 min-h-screen">
      <Header />
      {children}  
    </div>
  )
}

export default AppLayout