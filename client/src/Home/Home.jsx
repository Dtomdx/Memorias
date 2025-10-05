
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
/* usar store para redux */
import { useDispatch, useSelector } from "react-redux";

/* usar actions de redux */
import { getPosts } from "../actions/posts";
import { useLocation, useNavigate } from "react-router-dom";

/* pagination */
import Pagination from "../components/Pagination";

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

const Home = () => {
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null);
  /* pagination */
  const query = useQuery()
  const history = useNavigate()
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  

  useEffect(() => {
    
    dispatch(getPosts())
  }, [dispatch])

  /* Pagination */
  return (
    <div>
      <div className={`grid lg:grid-cols-5 lg:grid-rows-4 mx-10 gap-4 `}>
        <div className={`lg:col-span-4 lg:row-span-4`}>
          <Posts setCurrentId={setCurrentId}/>
        </div>
        <div className={`lg:col-span-1 lg:row-span-4 `}>
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
          {
            <div>
              <Pagination page={page}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Home
