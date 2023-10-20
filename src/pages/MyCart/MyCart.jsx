import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";


const MyCart = () => { 

    const loadedCarts = useLoaderData();
    console.log(loadedCarts);
    
    const [carts, setCarts] = useState(loadedCarts);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
                {
                    carts?.map(cart=><CartCard key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;