import React from 'react'
import { CiSearch } from "react-icons/ci";


const Search = () => {
  return (
    <>
    <div className="d-flex border rounded-2 my-2   align-items-center" >
        <div className="left">
            <CiSearch size={30}/>
        </div>
        <div className="right">
            <input type="search" style={{ background:'transparent' }} placeholder='Search new chat' className=" border-0 form-control w-100" />
        </div>
    </div>
    </>
  )
}

export default Search