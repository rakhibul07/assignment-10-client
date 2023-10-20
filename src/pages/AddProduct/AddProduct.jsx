import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const color = form.color.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const product = {
      name,
      image,
      color,
      brand,
      type,
      price,
      description,
      rating,
    };
    console.log(product);

    fetch("https://assignment-10-server-rho-eosin.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Add Product</h1>
        <p className="text-gray-600 mt-6">
          Please provide the details of the product you want to add to our
          catalog. We appreciate your contribution to our platform.
        </p>
        <form onSubmit={handleAddProduct}>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the product name"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Product Image
              </label>
              <input
                type="text"
                name="image"
                id="image"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the image URL or path"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Product Color
              </label>
              <input
                type="text"
                name="color"
                id="color"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the product color"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Brand Name
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the brand name"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Product Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the product type"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the price"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the price description"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1 font-medium">
                Rating
              </label>
              <input
                type="text"
                name="rating"
                id="rating"
                className="bg-gray-100 border border-gray-200 rounded py-2 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter the rating"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="py-2 px-20 lg:px-44 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
