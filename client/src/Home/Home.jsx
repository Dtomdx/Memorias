
import { useEffect } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
/* usar store para redux */
import { useDispatch, useSelector } from "react-redux";

/* usar actions de redux */
import { getPosts } from "../actions/posts";

const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts) // Agrega esta línea

  console.log('Posts en Home:', posts) // Debug

  useEffect(() => {
    console.log('useEffect ejecutándose') // Debug
    dispatch(getPosts())
  }, [dispatch])
  return (
    <div>
      <div className={`grid lg:grid-cols-5 lg:grid-rows-4 mx-10 gap-4 `}>
        <div className={`lg:col-span-4 lg:row-span-4`}>
          <Posts/>
        </div>
        <div className={`lg:col-span-1 lg:row-span-4 `}>
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default Home
