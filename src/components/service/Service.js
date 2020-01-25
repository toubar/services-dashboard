import React from 'react';
import ServerList from "./ServerList";

const Service = ({service}) => {
    return (
        <>
            <h1>{service.service}</h1>
            <h3>{service.ip}</h3>
            <ServerList servers={service.servers}/>
        </>
    );
};

export default Service;
