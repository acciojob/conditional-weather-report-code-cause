import React,{useState} from 'react'

const DisplayWeather = ({weather})=>{

const {temperature, conditions} = weather;

    const tempStyles ={
        color: temperature>20 ? 'blue' : 'red'
    };
    return(
        <div>

        <p>
            Temperature: <span style={tempStyles}>{temperature}</span>
        </p>
        <p>{conditions}</p>

        </div>
    )

}

export default DisplayWeather;