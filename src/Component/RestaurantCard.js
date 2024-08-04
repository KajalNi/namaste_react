import { CDN_URL } from "../utils/const"

const RestaurantCard = (props) =>{
    //  console.log('value of rescard',props)
    const {resData} = props
    const {name,cuisines,costForTwo,cloudinaryImageId,avgRating} = resData.info

   
    return(
        
        <div className="rescard w-56 mx-5 bg-gray-200 py-4 m-5">
          <div className="image w-44 mx-6 my-4 ">
          <img src= {CDN_URL + cloudinaryImageId}></img>
          </div>
          
          
          <h4 className="font-bold ">{name}</h4>
          <h5>{cuisines.join(", ")}</h5>
          <h5>{costForTwo}</h5>
          <h5>{avgRating}</h5>
        </div>
    )
}



export const IsRestaurantOpen = (RestaurantCard) =>{
//   console.log('value of rescards',RestaurantCard)
  return (props) =>{
    //   console.log('valur of hoc',props)
      return (
          <div>
              <label>Open</label>
             <RestaurantCard {...props}/>
          </div>
      )
  }
}

export default RestaurantCard