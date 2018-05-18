import React from 'react';

const Weather = (props) => {
    return (
      <div className="weather__info">
      {
        props.city && props.country &&
         <p className="weather-label "> Location:
        <span className="weather-value"> {props.city}, {props.country}</span>
        </p>
      }
      {
        props.temperature && <p className="weather-label ">Temperature: {props.temperature}</p>
      }
      {
        props.humidity && <p className="weather-label"> Humidity:
        <span className="weather-value"> {props.humidity} </span>
        </p>
      }
      {
        props.description && <p className="weather-label "> Condition:
        <span className="weather-value"> {props.description} </span>
        </p>
      }
      {
        props.error && <p className="weather-label ">  {props.error}</p>
      }
      </div>
    )

}

export default Weather;
