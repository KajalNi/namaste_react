import React, { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
// import { Menu_Api } from "../utils/const"
import useRestaurantMenu from "../utils/useRestaurantmenu"
import RestaurantCategory from "./RestaurantCategory"
import ResItem from "./ResItem"






const RestaurantMenu = () =>{
   
  const param = useParams()
  const resId = param.resId
const resmenu = useRestaurantMenu(resId)
  const[Categories,setCategories]= useState([])
   const [showIndex,setshowIndex]= useState(null)
   const [showItems,setshowItems] = useState(true)

  useEffect(()=>{
    const fetchCategories = resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    if(Array.isArray(fetchCategories)){
      setCategories(fetchCategories)
    }else{
      console.log('categories is not an array or is undefined')
    }
  },[resmenu])
    
   
  console.log('value of resmenu',resmenu)
  const resname = resmenu?.data?.cards[2]?.card?.card?.info
  const itemlist = resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  // const categories = resmenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // console.log('value of categories', categories)
  // console.log('VALUE OF CATEGORIES',Categories)
  
  const Itemcategories = Categories.filter(c => c.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log('Itemcategories',Itemcategories)


  const NestedCategories = Categories.filter(c => c.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")
  console.log('nestedcategories',NestedCategories)




 // replace someVariable with your variable




    
    console.log('value of resid',resId)
//     useEffect(() =>{
//          fetchMenu()
//          console.log("useEffect called")
//      },[])

//    const fetchMenu = async () =>{
//     const data = await fetch(Menu_Api+resId)
//     const json = await data.json()
//     setresmenu(json?.data?.cards[2]?.card?.card?.info)
//     console.log('value of res',resmenu)
//     setitemlist(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
//     console.log('value of itemlist', itemlist)
//    }
    

   
  
   if (resmenu === null){
    return <Shimmer/>
   }


    return( 
        <div className="menu text-center ">
          <h1 className="font-bold my-10 text-2xl">{resname.name}</h1>
          <h2 className="font-bold text-lg">Menu</h2>
          {Itemcategories.map((category,index) => 
          //controlled component
          <ResItem key = {category.card.card.title}
          data = {category.card.card} 
          showItems = {index === showIndex ?true:false}
         //3 showItems = {index === 3 ?true:false}
          //2 showItems = {index ===3 && true}
          //1 showItems = { true}
          setshowIndex = {() => setshowIndex(index)}
          />)}
         {NestedCategories.map((category,index) =>
          <RestaurantCategory data = {category.card.card}
          title ={category.card.card.title}
         
        
          showItems = {true}
          // setshowIndex = {() => setshowIndex(index)}
         />)}
   



          {/* <ul >
            {itemlist.map(item =>  <li >{item?.card?.info?.name}{"   Rs"} {item?.card?.info?.defaultPrice}</li>)}

          </ul> */}
        
        
        </div>
    )
}
export default RestaurantMenu