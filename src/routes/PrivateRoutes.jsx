import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

   
    
    if (loading) {
        return <div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
        <span className='sr-only'>Loading...</span>
         <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
       <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
       <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
   </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;