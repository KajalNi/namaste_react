import { useState,useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { IsRestaurantOpen } from "./RestaurantCard"






const Body = () =>{
  const [res,setres]= useState([])
  const [filteredres,setfilteredres] = useState([]) 
  const [inputTxt,setinputTxt] = useState("")

   const OpenLabel = IsRestaurantOpen(RestaurantCard)
  //  console.log('value of openLable',OpenLabel)
  // console.log("value of restaurnat", res)
  // console.log('body is rendered')
  useEffect(() =>{
    fetchData()
   
    

  },[])


  const fetchData =async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    // console.log("value of json", json)
      setres(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants)
      console.log('value of res', res)
    //  console.log("restaurantlist",json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants)
      setfilteredres(json?.data?.cards[1]?.card.card.gridElements?.infoWithStyle?.restaurants)
  }


  if(filteredres.length === 0){
      return <Shimmer/>
  }



  
    return(
        <div className="body">
          
            <div className="filter  flex my-10 ">
                <div className="mr-14">
                    <input className="border border-black" type="text" value={inputTxt} 
                    onChange={(e) => setinputTxt(e.target.value) }></input>
                    <button onClick = {()=>{
                    const searchfiltered =  res.filter(restaurant => restaurant.info.name.toLowerCase().includes(inputTxt.toLowerCase()))
                      setfilteredres(searchfiltered)
                      // console.log('value of filteredres',filteredres)

                    }}>Search</button>
                </div>
                <div>

                  <button className="btn border border-black p-2 rounded-md bg-gray-300 border-none" 
                  onClick = {() =>{const filteredRestaurant = res.filter(restaurant => restaurant.info.avgRating > 4);
                     console.log('value of filterRestaurant ',filteredRestaurant)
                    setfilteredres(filteredRestaurant)
                  }}
                    
                  >top Rated Restaurant</button>
                  
                </div>
              
                
            </div>
            <div className="res-container flex flex-wrap">
                {/* <RestaurantCard name= {"chai coffee"} cuisine = {"chai, burger,pizza"} Price = {"250 for two"}/> */}
                {/* <RestaurantCard resData = {resList[0]}/>
                <RestaurantCard resData = {resList[1]}/>
                <RestaurantCard resData = {resList[2]}/>
                <RestaurantCard resData = {resList[3]}/>
                <RestaurantCard resData = {resList[4]}/>
                <RestaurantCard resData = {resList[5]}/>
                <RestaurantCard resData = {resList[6]}/> */}
                {/* {console.log("value of resList", resList)} */}
                {/* {res.map(restaurant => <RestaurantCard resData = {restaurant}/>)}
                {filteredres.map(restaurant => 
                <Link to= {'/restaurant/'+restaurant.info.id}>{restaurant.info.isOpen?<OpenLabel resData={restaurant}/>:<RestaurantCard resData={restaurant}/>}</Link>)} */}
               
                  {filteredres.map(restaurant => {
    // console.log("OpenLabel",OpenLabel); // Log the restaurant object
    // console.log('Is Open:', restaurant.info.isOpen); // Log the isOpen property
  return (
    <Link key={restaurant.info.id} to={'/restaurant/' + restaurant.info.id}>
      {restaurant.info.isOpen ? (
        <OpenLabel resData={restaurant} />
      ) : (
        <RestaurantCard resData={restaurant} />
      )}
    </Link>
  );
})} 

                
  
            </div>
        </div>
    )
  }

export default Body