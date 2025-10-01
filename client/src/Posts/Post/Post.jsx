import Memorias from "../../images/Libros.jpg";

import moment from "moment";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/posts";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  ButtonBase,
  CardActions,
  Button,
} from "@mui/material";

import { likePost } from "../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user)
  console.log(post)
  const Likes = () => {
        
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.sub || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length + 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : 
        (
          //usuario diferente solo pone un like
          <><ThumbUpOffAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</> 
        );
    }

    return <><ThumbUpOffAltIcon fontSize="small" />&nbsp;Like</>;
  };
  return (
    <div className={`col-span-1 rounded-2xl shadow-2xl cursor-pointer `}>
      <div className={` relative`}>
        <div className={``}>
          <img
            src={post.selectedFile}
            alt={post.title}
            className="w-96 h-48 object-cover rounded-2xl"
          />
          {/* Overlay oscuro semitransparente */}
          <div className="absolute inset-0 bg-black/50 rounded-t-2xl"></div>
        </div>
        <div className={`absolute top-0 left-0 text-white p-2`}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
      </div>
      <div className={` flex flex-col space-y-2 p-2`}>
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {post.tags.map((tag) => ` #${tag}`)}
          </Typography>
        </div>
        <Typography
          vairant="h5"
          gutterBottom
        >
          {post.title}
        </Typography>
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
          >
            {post.message}
          </Typography>
        </div>
        <div className={`flex flex-row justify-between`}>
          <button className={`cursor-pointer`} onClick={() => dispatch(likePost(post._id))}>
            <Likes className={`text-blue-500`}/>
          </button>
          {(user?.sub === post?.creator ||
            user?._id === post?.creator) && (
            <button onClick={()=> dispatch(deletePost(post._id))}>
              <DeleteIcon className={`text-blue-500`}/>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;

/* 
<div className={` md:col-span-1 lg:row-span-2  rounded-2xl  relative`}> 
</div>
*/
