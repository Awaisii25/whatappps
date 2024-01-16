import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Search from './Search';
import Content from './Content';
import { data } from './data';
import Header from './Header';
const User = () => {

  return (
    <>
    <div className="user col-3" style={{ heigh:'100vh', }}>
         
        <Search/>
        {data.map((item)=>{
          return <Content {...item}/>
        })}
    </div>
    </>
    )
}

export default User