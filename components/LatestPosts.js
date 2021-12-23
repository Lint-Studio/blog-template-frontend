import React from "react";
import PostPreview from "./PostPreview";


function LatestPosts({posts}) {
    var latesposts = posts.slice(0,5)
    function renderLatestPosts(){
        return(
            posts.map((latesposts)=>{
                return <PostPreview post={latesposts} key={latesposts.id}/>
            })
        )
    }
    return ( 
        <div>
            <h1>Latest Posts</h1>
            {renderLatestPosts()}
        </div>
     );
}

export default LatestPosts;