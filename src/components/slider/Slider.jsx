import { useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import { useParams } from "react-router-dom";


const Slider = () => { 
    const [sliders,setSliders] = useState([]);
    useEffect(()=>{
        fetch("/slider.json")
        .then(res=>res.json())
        .then(data=>setSliders(data)
        )


    },[])
    const {brand} = useParams();
    
    const filterData = sliders?.filter(data=> data.brand === brand)
   
    return (
        <div className="pb-10">
            {
              filterData?.map(slider=><SliderCard key={slider.id} slider={slider}></SliderCard>)

             
            }
      
    
            

        </div>
    );
};

export default Slider;