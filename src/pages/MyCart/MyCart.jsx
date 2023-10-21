import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";


const MyCart = () => { 

    const loadedCarts = useLoaderData();

    const [carts, setCarts] = useState(loadedCarts);

    return (
        <div className="bg-base-200 dark:bg-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
                {
                    carts?.map(cart=><CartCard key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;