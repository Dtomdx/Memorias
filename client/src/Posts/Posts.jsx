import { useEffect } from "react";
import Post from "./Post/Post";
/* tienda store redux */
import { useSelector } from "react-redux";
/* material ui */

import CircularProgress from '@mui/material/CircularProgress';

const Posts = () => {

  
  const {posts} = useSelector((state) => state.posts)
  


  return (

    !posts.length ? <CircularProgress color="secondary" /> : (
      <div className={`grid lg:grid-cols-4 lg:grid-rows-4 gap-x-10 gap-y-16 mt-10`}>
        {
          posts.map((post) => (
            <Post key={post._id} post={post}/>
          ))
        }
      
      
      
      </div>
    )
    
  )
}

export default Posts



