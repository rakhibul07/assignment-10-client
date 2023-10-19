
import Swal from "sweetalert2";

const CartCard = ({carts,setCarts,cart}) => {
    const {_id,name, image,color, brand, type, price, rating,description} = cart;

    const handleDelete = _id => {
       
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cof => cof._id !== _id);
                            setCarts(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{color}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleDelete(_id)} className="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartCard;