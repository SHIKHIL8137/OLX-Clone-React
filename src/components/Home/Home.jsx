import React from 'react';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from '../../assets/ad.jpg'
import TitleCard from '../TitleCard/TitleCard';

const Home = ()=>{
return(
 
 <div className="max-w-6xl mx-auto p-4">
   <img src={banner} alt="" className="w-full h-40 object-cover rounded-lg mt-10 mb-10" />
   <div className="max-w-6xl mx-auto p-4">
     
     <h2 className="text-2xl font-semibold mb-4 text-gray-800">
       Fresh Recommendations
     </h2>
    <TitleCard />
   </div>
 </div>

)
}

export default Home