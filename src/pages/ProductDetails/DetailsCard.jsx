import toast from "react-hot-toast";

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
          toast.success("added successfully");
        }
      });
  };
  return (
    <div className=" bg-base-100 pt-6">
      <div className="lg:flex justify-center items-center gap-6">
        <div className="flex-1 p-5 lg:p-10">
          <img src={image} className="h-[300px] md:h-[400px] w-full" />
        </div>
        <div className="flex-1 text-justify space-y-6 p-4">
          <h2 className="text-4xl text-purple-400 font-bold">{name}</h2>
          <p>{description}</p>
          <div className="flex justify-start gap-8 items-center">
            <h2>{brand}</h2>
            <h2>{color}</h2>
            <h2>{rating}</h2>
          </div>
          <div className="flex justify-start items-center gap-10 py-6">
            <h2 className="text-3xl">${price}</h2>
            <button onClick={addToCart} className="btn btn-secondary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
