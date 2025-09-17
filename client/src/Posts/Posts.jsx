
import Post from "./Post/Post";

const Posts = () => {

  const posts = [1,2,3,4,5,6,7,8]
  return (
    <div className={`grid lg:grid-cols-4 lg:grid-rows-4 gap-x-10 gap-y-16 mt-10`}>
      
      {
        posts.map((post, index) => (
          <Post/>
        ))
      }
      
      
    </div>
  )
}

export default Posts
