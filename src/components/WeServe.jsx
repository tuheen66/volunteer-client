import { useEffect, useState } from "react";
import WeServeCard from "./WeServeCard";
import { Slide } from "react-awesome-reveal";



const WeServe = () => {

    const [ services, setServices]= useState([])

    useEffect(() => {
        fetch("./whoWeServe.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, []);
    return (
        <div className="mb-8">
            <h2 className="mb-4 font-bold text-3xl text-center">Who We Serve</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
            <Slide>

                {services.map(service=><WeServeCard key={service.id} service={service}></WeServeCard>)}
            </Slide>
            </div>
        </div>
    );
};

export default WeServe;