import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id,brand,image,available} = card;
    return (
        <div>
           
          
         <Link to={`/products/${brand}`}>
         <div className=" p-6 transform hover:scale-105 duration-500 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-400 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		
		<h2 className="text-xl font-semibold">{brand}</h2>
	</div>
	
           </div>
         </Link>
           
        </div>
    );
};

export default Card;