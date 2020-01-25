import React from 'react';
import ServerStatus from "./ServerStatus";

const ServerList = ({servers}) => {
    return (
        <div className="ServerList">
            {servers.map( (item, i) => {
                return (
                    <div className={"server"} key={i}>
                        <ServerStatus status={item.status}/>
                        <div className={'serverName'}>{item.name}</div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default ServerList;
