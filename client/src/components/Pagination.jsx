import { useDispatch } from "react-redux"
import { getPosts } from "../actions/posts"


const Paginate = ({page}) => {

    const dispatch = useDispatch()

    useEffect(() => {
    
    if(page) dispatch(getPosts(page))
  }, [page])
  return (
    <div>
      Paginate
    </div>
  )
}

export default Paginate
