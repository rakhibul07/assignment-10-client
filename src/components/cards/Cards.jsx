import Card from "../card/Card";



const Cards = ({cards}) => {

    
    
    return (
        <div>
            <h2 className="text-2xl text-center py-6 text-purple-400">Our Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-0">
                {

                    cards?.map(card=> <Card key={card.id} card={card}></Card>)
                }

            </div>
        </div>
    );
};

export default Cards;