import React, {useEffect, useState} from "react";
import './App.css';
import Service from "../service/Service";

const App = () => {

    // useState is a Hook that lets you add state to function components.
    const [services, setServices] = useState([]);
    const [displayData, setDisplayData] = useState(false);

    // useEffect Hook - analogous to Life Cycle Methods for class based components i.e. componentWillMount()
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://127.0.0.1:5000/services');
            if (res.status === 200) {
                res.json().then((res) => {
                    setServices(res['services']);
                    setDisplayData(!displayData);
                })
            }
        };
        fetchData();
    }, []);

    return (
        displayData ?
            <div className="Services-container">
                {services.map((item, i) => {
                    return (
                        <div className="Service" key={i}>
                            <Service service={item}/>
                        </div>
                    )
                })
                }
            </div>
            :
            <h1>Internal server error</h1>
    );
};


export default App;
