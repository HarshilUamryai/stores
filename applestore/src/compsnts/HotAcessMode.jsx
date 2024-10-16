import React from 'react'
import {Link} from "react-router-dom"
import '../style/Hot.css'
const HotAcessMode = () => {
  return (
    <div>
       <div className="HotAccessoriesMenu">
             <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
             <Link className="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>
             <Link className="HotAccessoriesLink" to="/home">Home</Link>
             <Link className="HotAccessoriesLink" to="/lifestyle">Lifestyle</Link>
             <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>
            
        </div>
    </div>
  )
}

export default HotAcessMode
