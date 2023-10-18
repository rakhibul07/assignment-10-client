import { useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useState(AuthContext);

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/"></Navigate>
   
};

export default PrivateRoutes;