import React, { useState } from 'react'

function Info({info}){
    const [show, setShow] = useState(false)
    return(
        <div>
           <button onClick={()=> setShow((show)=> !show)}>{info.username}</button>
        {show ? <h3>{info.email} {info.account_type}</h3> : false}
            </div>

    )
}
export default Info