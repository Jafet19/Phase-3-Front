import React from 'react';
import { Link } from 'react-router-dom';


function Home(){
    return(
        <div className='title'>
        <div className="animation-area">
        <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>	
    <h1>Life</h1>
        <h2><Link to='/accounts'>Accounts</Link></h2>
        <h2><Link to='/posts'>Posts</Link></h2>
        </div>
    )
}
export default Home