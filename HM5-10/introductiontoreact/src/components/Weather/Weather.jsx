import React, { useEffect, useState } from 'react';
import SunnyWithCloud from './images/SunnyWithCloud.svg';
import './Weather.css';

export default function Weather(props){
    const [data, setData] = useState(null);
    const API_KEY = '6359e9dba2064bbeb8a213808230105';
    const LOCATION = props.location;

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${LOCATION}`);
          const json = await response.json();
          setData(json);
        }
    
        fetchData();
      }, [API_KEY, LOCATION]);
    
      if (!data) {
        return (
            <div className='weather'>
            <img src={SunnyWithCloud} alt="logo of weather" /> 
            <span className='bold'>Loading...</span>
            </div>
        )
      } 
      else {
        //accessing location and current data:
        const location = data.location;
        const current = data.current;
    
        return (
            <div className='weather'>
                <img src={SunnyWithCloud} alt="logo of weather" /> 
                <span className='temperature bold'>{current.temp_c + "°C"}</span> 
                <span className='city'>{location.name}</span>
            </div>
        )
    }
}