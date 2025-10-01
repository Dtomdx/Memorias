import { useEffect } from "react";
import Post from "./Post/Post";
/* tienda store redux */
import { useSelector } from "react-redux";
/* material ui */

import CircularProgress from '@mui/material/CircularProgress';

const Posts = ({setCurrentId}) => {

  
  const {posts} = useSelector((state) => state.posts)
  


  return (

    !posts.length ? <CircularProgress color="secondary" /> : (
      <div className={`grid lg:grid-cols-4 lg:grid-rows-2 gap-x-5 gap-y-16 mt-10 rounded-2xl`}>
        {
          posts.map((post) => (
            <Post key={post._id} post={post} setCurrentId={setCurrentId}/>
          ))
        }
      
      
      
      </div>
    )
    
  )
}

export default Posts



