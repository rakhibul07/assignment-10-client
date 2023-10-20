import { Link, useNavigate } from "react-router-dom";
import SocialLogIn from "../../components/socialLogIn/SocialLogIn";

import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext(AuthContext);

  const handleSubmit = e =>{
    e.preventDefault()
   
    const email = e.target.email.value
    const password = e.target.password.value
    
      login(email,password)
      .then(()=>{
          toast.success("User logged in successfully")
          e.target.reset();
          navigate("/");
      })
      .catch(()=>{
        toast.error("Email and Password doesn't match or Didn't signup") 
      })
    
  }
    return (
        <>
            <div className="flex h-full py-10 px-5 lg:min-h-screen justify-center items-center  dark:bg-slate-500 ">
  
  <div className=" dark:bg-slate-800 w-full lg:w-fit rounded-2xl shadow-lg py-5 ">
  
    <div className="px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74] dark:text-white">Login</h2>
      <p className="text-xs mt-4 text-[#002D74] dark:text-white">If you are already a member, easily log in</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
              <input className="p-2 mt-4  rounded-xl border" type="email" name="email" placeholder="Email" required/>
              
        
          <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" required/>
         
        
        <button className="bg-blue-800 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div className="mt-2 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>

      <SocialLogIn />

      <div className=" text-xs border-b border-[#002D74] dark:text-white py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-3 text-xs dark:text-white flex justify-between items-center text-[#002D74]">
        <p>Do not have an account?</p>
        <button className="py-2 px-5 bg-white border dark:bg-slate-600  rounded-xl hover:scale-110 duration-300"><Link to="/signup">Sign up</Link></button>
      </div>
    </div>

    
    
  </div>
            </div>
        </>
    );
};

export default Login;