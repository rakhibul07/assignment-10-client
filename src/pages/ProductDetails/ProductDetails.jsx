import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const ProductDetails = () => {
    const [product,setProduct] = useState({});
    const products = useLoaderData();
    const {id} = useParams();

   useEffect(()=>{
    const findProduct = products.find(product => product._id == id)
    setProduct(findProduct)
   },[id,products])
    

    return (
        <div>
           
            <DetailsCard product={product}></DetailsCard>

        </div>
    );
};

export default ProductDetails;