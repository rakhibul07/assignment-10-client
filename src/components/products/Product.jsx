import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {_id,name, image,color, brand, type, price, rating} = product;
   
    return (
        <div>
       <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge bg-purple-400 p-3">{brand}</div>
      
    </h2>
    <div className="flex justify-between items-center">
        <div>
        <h2>{type}</h2>
        <h2>${price}</h2>
        </div>
        <span><span className="text-2xl text-purple-500">&#9733;
          </span>{rating}</span>
    </div>
    <div className="card-actions justify-end">
     <Link to={`/products/${brand}/${_id}`}> <div className="badge badge-outline">Details</div> </Link>
     <Link to={`/updateProduct/${_id}`}> <div className="badge badge-outline">Update</div></Link>
    </div>
  </div>
</div>
</div>
        
    );
};

export default Product;