import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import SocialLogIn from '../../components/socialLogIn/SocialLogIn';

const SignUp = () => {
  const navigate = useNavigate()
  const { createUser,handleUpdateProfile } = useContext(AuthContext);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value
    const password = e.target.password.value

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password doesn't have a capital letter");
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
    
      toast.error("Password must contain at least one special character");
      setHasSpecialCharacter(true);
    } else {
      createUser(email, password)
        .then(() => {

         handleUpdateProfile(name,image)
        .then(()=>{
          toast.success("User Signed up in successfully")
          e.target.reset();
          navigate("/")
        })
               })
        .catch(error => {
          toast.error(error.message);        
       });
    }
 
  };

  return (
    <>
      <div className=" flex h-full py-5 px-5 lg:min-h-screen justify-center items-center bg-pink-100  dark:bg-slate-500">
        <div className="bg-pink-200  dark:bg-slate-800 w-full   lg:w-fit rounded-2xl shadow-lg py-5">
          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl dark:text-white text-[#002D74]">Signup</h2>
            <p className="text-xs mt-4 text-[#002D74] dark:text-white">If you are new, please signup</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="p-2  mt-3 rounded-xl border" type="text" name="name" placeholder="Name" required />
              <input className="p-2  rounded-xl border" type="email" name="email" placeholder="Email" required/>
              <input className="p-2  rounded-xl border" type="text" name="image" placeholder="Image URL" required/>
              <input className={`p-2 rounded-xl border w-full ${hasSpecialCharacter ? '' : ''}`} type="password" name="password" placeholder="Password" required/>
              <button className="bg-pink-800 rounded-xl text-white py-2 hover:scale-105 duration-300" type='submit'>Signup</button>
            </form>

            <div className="mt-2 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <SocialLogIn />

            <div className="mt-3 text-xs flex dark:text-white justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <button className="py-2 ml-2 px-5 bg-white dark:bg-slate-600 border rounded-xl hover:scale-110 duration-300">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
