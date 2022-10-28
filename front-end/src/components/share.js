import React from "react";

function Share({post}){
    return(
        <section>
  <div className="container">
    <div className="background-img">
    <img src={post.image_url} alt={post.title} />
    <h2>{post.title}</h2>
          <p>{post.caption}</p>
    </div>
  </div>
</section>
    )
}
export default Share
