import Memorias from "../../images/Libros.jpg";

import moment from "moment";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`md:col-span-1 lg:row-span-2  rounded-2xl shadow-xl relative`}
    >
      <div className={`flex flex-col `}>
        <div className={`h-1/2 relative`}>
          <img
            src={post.selectedFile}
            alt=""
            className={`bg-gray-950 bg-opacity-50 mix-blend-darken object-center h-48 w-full rounded-t-2xl`}
          />
          <div className={`absolute top-5 left-5 text-white`}>
            <p>{post.name}</p>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className={`absolute top-5 right-5`}>
            <button className={`cursor-pointer`}>
              <MoreHorizIcon
                fontSize="large"
                onClick={() => setCurrentId(post._id)}
              />
            </button>
          </div>
        </div>
        <div className={`h-1/2`}>
          <p className={`mt-2`}>{post.tags.map((tag) => ` #${tag}`)}</p>
          <p className={`mt-4`}>{post.title}</p>
          <p className={`mt-4`}>{post.message}</p>
        </div>
        <div>
          <button className={`cursor-pointer`}>
            <DeleteIcon
              fontSize="medium"
              onClick={() => dispatch(deletePost(post._id))}
              className={``}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
