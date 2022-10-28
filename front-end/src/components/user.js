import React from 'react';
import Data from './data';
import Info from './info';

function Users({user, posts, info}){
    const data = user.map((user)=>{
        return(
            <Data
            key={user.id}
            user={user}
            />
        )
    })
    const data3 = info.map((info) => {
        return(
            <Info
            key={info.id}
            info={info}
            />
            )
    })
    return(
        <div>
            <h1>Accounts</h1>
            {data}
            {data3}
        </div>
    )
}
export default Users