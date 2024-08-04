import React from "react"
import { useState } from "react"
import ItemList from "./ItemList"

const ResItem = (data,showItems,setshowIndex) =>{
  // console.log('showIndex',data.setshowIndex)
  const handleClick = () =>{
    data.setshowIndex()
  }

  console.log('value of another data',data)
  return(
    <div>
      <div className="header w-6/12 mx-auto my-6 bg-gray-50 shadow-lg  p-4 " >
      <div className="flex justify-between" onClick={handleClick} >
      <span className="font-bold text-lg mb-4 ">{data.data.title} ({data.data.itemCards.length})</span>
      <span >⬇️</span>
      </div>
       
        {/* accordion body */}
        {data.showItems && <ItemList itemdata = {data.data.itemCards}/>}
      </div>
           
    </div>
  )
}
export default ResItem