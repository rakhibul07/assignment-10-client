

const Product = ({product}) => {
    const {name, image,color, brand, type, price, rating} = product;
   
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
     <button> <div className="badge badge-outline">Details</div> </button>
     <button> <div className="badge badge-outline">Update</div></button>
    </div>
  </div>
</div>
</div>
        
    );
};

export default Product;