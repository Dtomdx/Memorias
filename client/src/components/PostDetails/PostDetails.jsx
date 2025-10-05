import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../actions/posts";

const PostDetails = () => {

  const {post, posts} = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  const history = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getPost(id))
  }, [id])

  if(!post) return null;

  return (
    <div>
      <div className={`mx-10 grid lg:grid-cols-5 lg:grid-rows-4`}>
        <div className={`bg-amber-200 lg:col-span-3 lg:row-span-3`}>
          <p>
            texto
          </p>
        </div>
        <div className={`bg-amber-400 lg:col-span-2 lg:row-span-3`}>
          img
        </div>
      </div>
    </div>
  )
}

export default PostDetails
