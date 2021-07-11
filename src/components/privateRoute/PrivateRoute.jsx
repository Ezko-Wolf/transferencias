import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({children, redir, toEval, ...rest}) => {
    return  <Route {...rest} render={ () => {
                    return toEval ? children : <Redirect to={redir}/>
            }}/>; 
};

export default PrivateRoute;