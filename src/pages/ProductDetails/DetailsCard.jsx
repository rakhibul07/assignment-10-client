

const DetailsCard = ({product}) => {
    const {name, image,color, brand, type, price, rating,description} = product;
    return (
        <div className="h-[80vh] bg-green-100 pt-6">
            

                <div className="flex justify-center items-center gap-6">
                    <div className="flex-1 p-10">
                        <img src={image} alt="" />
                    </div>
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl text-purple-400 font-bold">{name}</h2>
                        <p>{description}</p>
                        <div className="flex justify-start gap-8 items-center">
                            <h2>{type}</h2>
                            <h2>{color}</h2>
                            <h2>{rating}</h2>
                        </div>
                        <div className="flex justify-start items-center gap-10 py-6">
                            <h2 className="text-3xl">${price}</h2>
                            <button className="btn btn-secondary">Add to Cart</button>
                        </div>
                    </div>
                </div>


        </div>
    );
};

export default DetailsCard;