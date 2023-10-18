import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const { brand } = useParams();
    const products = useLoaderData();

    const filteredProducts = products.filter((product) => product.brand === brand);
    
    return (
        <div>
            {filteredProducts.length > 0 ? (
                <div>
                    <h2>Products for {brand}</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {filteredProducts.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-[60vh]">
                    <h2 className="text-4xl ">No products are available for {brand}</h2>
                </div>
            )}
        </div>
    );
};

export default Products;
