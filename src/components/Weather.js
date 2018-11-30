import React from 'react';

const Weather = props => (
        <div className="row mt-3">
            <div className="col-sm-3">
                {props.icon && <i className={`owf owf-${props.icon} owf-pull-right owf-5x`} align="right"></i>}
            </div>
            <div className="col-sm-9" style={{textAlign:"left"}}>
                <strong>{ props.city && props.country && <span>{props.city}, {props.country}</span> }</strong><br />
                { props.temperature && <span>Temp: {props.temperature} °C</span> } { props.description && <span>{props.title} ({ props.description})</span> }<br />
                {props.min && props.max && <span>Min {props.min}°C Max {props.max}°C</span>}  { props.humidity && <span> | Humidity: {props.humidity}%</span> }
            </div>
        </div> 
    );

export default Weather;