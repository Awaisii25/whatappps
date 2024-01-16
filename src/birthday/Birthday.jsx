import React, { useState } from 'react'
import SingleB from './SingleB'
import { singleb } from './data'

const Birthday = () => {
  const [ value, setValue] = useState(singleb);
  const removeallDay= (id)=>{
    const newDays= value.filter(((item)=>{
      return item.id !==id
    }))
    setValue(newDays)
  }
  return (
    <>
       <div className="container clo-lg-7 d-block mx-auto shadow p-3">
       <h4 className='text-center display-4 fw-bolder'> {value.length} Birthdays today</h4>
        {value.map((num)=>{
          return <SingleB {...num} key={num.id} remove={removeallDay}/>
        })}

       <button onClick={value.length=== 0 ? ()=>setValue(singleb) : ()=>setValue([])} className={`btn btn-danger d-block mx-auto ${value.length===0 ? 'bg-success' : 'bg-danger'}`}>
        {value.length===0 ? 'Refresh All ' : 'Remove All'}
       </button>
       </div> 
    </>
  )
}

export default Birthday