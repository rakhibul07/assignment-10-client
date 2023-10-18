import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/cards/Cards";


const Home = () => {
    const cards = useLoaderData();
    return (
        <div >
           <div>
           <Banner />
           <Cards cards={cards}/>
           </div>
        </div>
    );
};

export default Home;