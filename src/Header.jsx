import React from 'react'

const Header = () => {
  return (
    <>
    <div   className="p-3 bg-white w-100 d-flex w-10  justify-content-between">
        <div className="left-icon">
        <FaRegUserCircle size={30}/>
        </div>
        <div className="right-icon d-flex gap-3">
        <RxUpdate size={30}/>
        <MdMessage size={30}/>
        <BsThreeDotsVertical size={30}/>
        </div>
        </div>
    </>
  )
}

export default Header