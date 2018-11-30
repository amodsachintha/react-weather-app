import React from 'react';

const Error = (props) => (
    <div className="mt-3">
        {props.error && 
        <div className="alert alert-danger text-muted shadow">
            {props.error}
        </div>
        }
    </div> 
);

export default Error;