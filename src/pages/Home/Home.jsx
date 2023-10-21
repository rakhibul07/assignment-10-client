import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/cards/Cards";
import Console from "../../components/Console/Console";
import Faq from "../../components/FAQ/FAQ";
import Featured from "../../components/Featured/Featured";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div >
           <div>
           <Banner />
           <Cards cards={cards}/>
           <Featured />
           <Console />
           <Faq />
           </div>
        </div>
    );
};

export default Home;