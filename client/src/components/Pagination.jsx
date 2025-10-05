import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

const Paginate = ({ page }) => {
  const {numberOfPages} = useSelector((state)=>state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) dispatch(getPosts(page));
  }, [page]);
  return (
    <Pagination
      count={numberOfPages}
      page={Number(page) || 1}
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
      )}
    />
  );
};

export default Paginate;
