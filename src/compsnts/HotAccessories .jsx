
import React from 'react';
import Hotcard from './Hotcard.jsx';
import '../data/iphone.json'
import "../style/Hot.css"


const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccessories,
  mobileAccessoriesCover
}) => {
  return (

    <div>
      {/* Example for Music Accessories */}
      {music && (
        <div>
          <img src={ musicCover} alt="Music Cover" />
          <h2>Music Accessories</h2>
          <ul>
           
            {music.map((item,index) => (
              <Hotcard key={item.id}
              name={item.name}price={item.price}image={item.image} index={index}/>
          
            ))}
          </ul>
        </div>
      
      )}

      {/* Repeat similar blocks for other categories */}
      
      {smartDevice && (
        <div>
          <img src={smartDeviceCover} alt="Smart Device Cover" />
          <h2>Smart Devices</h2>
          <ul>
            {smartDevice.map((item,index) => (
             <Hotcard key={item.id}
             name={item.name}price={item.price}image={item.image} index={index}/>
            ))}
          </ul>
        </div>
      )} 

      {home && (
        <div>
          <img src={homeCover} alt="Home Cover" />
          <h2>Home Accessories</h2>
          <ul>
            {home.map((item,index) => (
          <Hotcard key={item.id}
          name={item.name}price={item.price}image={item.image} index={index}/>
            ))}
          </ul>
        </div>
      )}

      {lifestyle && (
        <div>
          <img src={lifestyleCover} alt="Lifestyle Cover" />
          <h2>Lifestyle Accessories</h2>
          <ul>
            {lifestyle.map((item,index) => (
             <Hotcard key={item.id}
             name={item.name}price={item.price}image={item.image} index={index}/>
            ))}
          </ul>
        </div>
      )}

      {mobileAccessories && (
        <div>
          <img src={mobileAccessoriesCover} alt="Mobile Accessories Cover" />
          <h2>Mobile Accessories</h2>
          <ul>
            {mobileAccessories.map((item,index) => (
        <Hotcard key={item.id}
        name={item.name}price={item.price}image={item.image} index={index}/>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HotAccessories;
