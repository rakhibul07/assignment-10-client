import toast from "react-hot-toast";
import PropTypes from 'prop-types';

const DetailsCard = ({ product }) => {
  const { name, image, color, brand, type, price, rating, description } =
    product;

  const addToCart = () => {
    const productDetails = {
      name,
      image,
      color,
      brand,
      type,
      price,
      rating,
      description,
    };
    console.log(productDetails);

    fetch("https://assignment-10-server-rho-eosin.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added Successfully");
        }
      });
  };
  return (
    <div className="pb-4 lg:py-6 ">
      <div className="lg:flex justify-center items-center bg-base-100 dark:bg-gray-700  gap-6">
        <div className="flex-1 p-5 lg:p-10">
          <img src={image} className="h-[300px] md:h-[400px] w-full rounded-md" />
        </div>
        <div className="flex-1 text-justify space-y-6 p-4">
          <h2 className="text-4xl text-gray-400 dark:text-gray-200 font-bold">{name}</h2>
          <p className="text-gray-500 dark:text-slate-200">{description}</p>
          <div className="flex justify-start gap-4 lg:gap-8 items-center dark:text-gray-200 font-semibold">
            <h2>Brand: {brand}</h2>
            <h2>Type: {type}</h2>
            <h2>Rating: <span className="text-purple-600 text-xl">&#9733; </span>{rating}</h2>
          </div>
          <div className="flex justify-start items-center gap-10 py-6">
            <h2 className="text-3xl font-semibold dark:text-slate-400">${price}</h2>
            <button onClick={addToCart} className="btn bg-purple-500 hover:text-gray-600 px-3 py-2 text-base-100 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
DetailsCard.propTypes ={
  product:PropTypes.object
}
export default DetailsCard;
