import Swal from "sweetalert2";

const CartCard = ({ carts, setCarts, cart }) => {
  const { _id, name, image, color, brand, type, price, rating, description } =
    cart;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-10-server-rho-eosin.vercel.app/carts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
              const remaining = carts.filter((cof) => cof._id !== _id);
              setCarts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="bg-base-100 dark:bg-gray-700 rounded-md ">
        <div className="">
            <img src={image} className="h-52 w-full" />
        </div>
        <div className="flex justify-between p-10 ">
          <div className="">
          <h1 className="text-xl font-medium dark:text-slate-200">{name}</h1>
          <h2 className="text-2xl pt-3  dark:text-slate-200">$ {price}</h2>
          </div>
          <div>
            <button onClick={()=>handleDelete(_id)} className="bg-purple-500 px-3 py-2 rounded-md mt-8 text-white font-medium">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
