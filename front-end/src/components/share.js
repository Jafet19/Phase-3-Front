import React from "react";
import Home from "./home";

function Share({post, info}){
    return(
        <div className="Shared_post">
            <h3>{info.username}</h3>
            <h2>{post.title}</h2>
            <img src={post.image_url} alt={post.title} />
            <h5>{post.caption}</h5>
        </div>
    )
}
export default Share