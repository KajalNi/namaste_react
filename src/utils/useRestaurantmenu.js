import { useEffect, useState } from "react"
import { Menu_Api } from "./const"


const useRestaurantMenu = (resId) =>{
    const [resmenu,setresmenu] = useState(null)

    useEffect(() =>{
        fetchMenu()
    },[])

   const fetchMenu =async () =>{
        const data =await fetch(Menu_Api+resId)
        const json = await data.json()
        setresmenu(json)
   }

    return resmenu

}

export default useRestaurantMenu

