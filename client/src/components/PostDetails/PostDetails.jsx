import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../actions/posts";
import moment from "moment";

import { Divider } from "@mui/material";
const PostDetails = () => {
  const { post, posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  if (!post) return null;

  return (
    <div className={`p-5 rounded-2xl`}>
      <div className={`mx-10 grid lg:grid-cols-5 lg:grid-rows-4`}>
        <div className={` lg:col-span-3 lg:row-span-3 flex flex-col rounded-2xl  shadow-2xl p-4 space-y-4`}>
          <div>
            <p>{post.title}</p>
          </div>
          <div>
            <p className={`text-gray-500`}>
              {post.tags.map((tag) => `#${tag} `)}
            </p>
          </div>
          <div>
            <p>{post.message}</p>
          </div>
          <div>
            <p>Creado por: {post.name}</p>
          </div>
          <div>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <Divider style={{ margin: "20px 0" }} />
          <div>
            <p>
            <strong>Realtime Chat -comming soon!</strong>
          </p>
          </div>
          <Divider style={{ margin: "20px 0" }} />
          <div>
            <p>
              <strong>Comments - comming soon!</strong>
            </p>
          </div>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={` lg:col-span-2 lg:row-span-3 ml-5`}>
          <img
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
            className={`object-cover w-full max-h-[600px] rounded-2xl`}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
