import { CDN_URL } from "../utils/const"
const NestedItemList = ({data}) =>{
    console.log("value of nesteddata",data)
    return(
        <div>
            {data.map(item => 
                <div>
                    <div className= "p-2 m-2 border-gray-200 border-b-2 flex justify-between">
                        <div className="text-left pl-2">
                            <span className="font-bold text-lg mb-4">{item?.card?.info?.name}</span><br></br>
                            <span className="font-bold text">₹{item?.card?.info?.price/100}</span>
                            <div className="text-left font-gray mb-16 pl-2">
                                {item?.card?.info?.description}
                        </div >
                        </div>
                        <div >
                            <div className="absolute">
                            <button className="p-1 bg-black text-white shadow-lg m-auto rounded-md">ADD+</button>
                            </div>
                            
                        <img  src={CDN_URL+item.card.info.imageId} className="w-80"></img>
                        </div>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default NestedItemList