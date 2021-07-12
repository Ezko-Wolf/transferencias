import React from 'react';
import 'bootstrap-css-only';


const Error = ({message}) => {
    return(
        <div className="alert alert-danger mt-3" role="alert">
            {message}
        </div>
    );
}

export default Error;