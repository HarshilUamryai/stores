import React from 'react'
import Offer from "./Offer.jsx"
import "../style/offer.css"

const Offers =({offer,map})=> {
  return (
    <div>
        <div className="offersSection"> 
        {offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    </div>
  )
}

export default Offers
