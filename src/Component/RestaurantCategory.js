import { useState } from "react"
import NestedItemList from "./NestedItemList"

const RestaurantCategory = (data,title,showItems) =>{
   
    console.log("value of data",data)
    console.log('value of title',title)
    const categories = data?.data.categories
    console.log("value of categories",categories)
    console.log("value of showItems",showItems)
    const handleClick = () =>{
        console.log('clicked')
    }
    return(

        <div>
            
            {/* header */}
            
            <h1 className="font-bold text-lg">{data.title}</h1>
            {categories.map(category => 
            <div className="header w-6/12 mx-auto my-6 bg-gray-50 shadow-lg  p-4 " onClick={handleClick}>
                <div className="flex justify-between">
                    <span  className="font-bold text-lg mb-4 ">{category.title}({category.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div>{showItems && <NestedItemList data = {category.itemCards} />}</div>
            </div>)}

            
       
        </div>
    )
}

export default RestaurantCategory