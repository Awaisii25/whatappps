import React from 'react'

const Content = ({image, tittle , msg}) => {
  return (
    <>
    <div className="p-2 d-flex align-items-center gap-2">
    <div className="image">
        <img width="60px" height="60px" style={{ borderRadius:'50%' }} src={image} alt="" />
    </div>
    <div className="text">
    <h6 className='m-0'>{tittle}</h6>
    <p className='m-0'>{msg}</p>
    </div>
    </div>
    </>
  )
}

export default Content