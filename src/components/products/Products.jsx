import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import Slider from "../slider/Slider";

const Products = () => {
    const { brand } = useParams();
    const products = useLoaderData();

    

    const filteredProducts = products.filter((product) => product.brand === brand);
    
    return (
        <div>
            {filteredProducts.length > 0 ? (
                <div>
                    <Slider />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
                        {filteredProducts.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                        
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-[60vh] p-10 text-justify">
                    <h2 className="text-4xl ">No products are available for {brand}</h2>
                    
                </div>
            )}
        </div>
    );
};

export default Products;
