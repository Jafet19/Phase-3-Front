import React from 'react'
import Share from './share'


function Post({posts, info}){
    const data2 = posts.map((post)=>{
        return(
            <Share
            key={post.id}
            post={post}
            info={info}
            />
        )
    })
    return(
        <div>
            {data2}
        </div>
    )

}
export default Post