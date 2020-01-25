import React, {useEffect, useState} from "react";
import './App.css';
import Service from "../service/Service";

const App = () => {

    // useState is a Hook that lets you add state to function components.
    const [services, setServices] = useState([]);

    // TODO - call the Flask endpoint when it's done
    const fetchData = async () => {
        const res = await fetch('http://localhost:3003/services');
        res
            .json()
            .then(response => setServices(response))
    };

    // useEffect Hook - analogous to Life Cycle Methods for class based components i.e. componentWillMount()
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="Services-container">
            {services.map((item, i) => {
                return (
                    <div className="Service" key={i}>
                        <Service service={item}/>
                    </div>
                )
            })}
        </div>
    );
};


export default App;
