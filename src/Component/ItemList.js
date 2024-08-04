import { CDN_URL } from "../utils/const"
const ItemList = ({itemdata}) =>{
    console.log('value of itemdata',itemdata)
    
  return(
    <div>
        {itemdata.map(item => 
        <div key ={item.card.info.id}
        className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
            <div>
            <div className="text-left mb-3">
            
            <span className="font-bold">{item.card.info.name}</span><br></br>
            <span className="font-bold ">₹{item.card.info.price ? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
           </div>
           <div className="text-left font-gray mb-16">
                {item.card.info.description}
                
            </div>
            </div>
           
            <div>
            <div className="absolute " >
                <button className="p-1 bg-black text-white shadow-lg m-auto rounded-md">
                    Add +
                </button>
            </div>
            <img src = {CDN_URL+item.card.info.imageId}
            className="w-80 p-4 ">
            </img>
            
            </div>
             
        </div>)}
        
    </div>
  )
}
export default ItemList