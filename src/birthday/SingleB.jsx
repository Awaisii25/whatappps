import React from 'react'

const SingleB = ({id, image, tittle, age, remove}) => {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
    <div className="left">
      <div className="d-flex align-items-center gap-3">
        <div className="image">
          <img width="70px" height="70px" style={{ borderRadius:'50%' }} src={image} alt="" />
        </div>
        <div className="text-info">
          <h5>{tittle}</h5>
          <h6>{age} year</h6>
        </div>
      </div>
    </div>
    <div className="right">
    <button onClick={()=> remove(id)} className='btn btn-danger'>Remove</button>
    </div>
   </div>
     
    </>
  )
}

export default SingleB