import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <div className="form-group" style={{textAlign: "left"}}>
            <input type="text" name="city" id="city" className="form-control" placeholder="City..."/>
        </div>
        <div className="form-group" style={{textAlign: "left"}}>
            <input type="text" name="country" id="country" className="form-control" placeholder="Country..."/>
        </div>
        <button className="btn btn-outline-primary">Get Weather</button>
    </form>
);

export default Form;