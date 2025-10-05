import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
/* usar store para redux */
import { useDispatch, useSelector } from "react-redux";

/* usar actions de redux */
import {  getPostsBySearch } from "../actions/posts";
import { useLocation, useNavigate } from "react-router-dom";


import Pagination from "../components/Pagination";
import {  TextField } from "@mui/material";
import { MuiChipsInput } from 'mui-chips-input'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  /* pagination */
  const query = useQuery();
  const history = useNavigate();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyPress = (e)=>{
      if(e.keyCode === 13){
          //search post
          searchPost();
      }
  };

  const searchPost = () => {
    if(search.trim() || tags){
      dispatch(getPostsBySearch({search, tags: tags.join(",")}))
      history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)
    } else {
      history("/");
    }

  }

  const handleAdd = (tagToAdd) => setTags([...tags, tagToAdd]);
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete))
  return (
    <div>
      <div className={`grid lg:grid-cols-5 lg:grid-rows-4 mx-10 gap-4 `}>
        <div className={`lg:col-span-4 lg:row-span-4`}>
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className={`lg:col-span-1 lg:row-span-4 mt-10`}>
          <div className={`rounded-tl-sm mt-4 flex flex-col p-4 space-y-2 shadow-2xl`}>
            <TextField
              name="search"
              variant="outlined"
              label="Buscar Memorias"
              onKeyPress={handleKeyPress}
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MuiChipsInput
              value={tags}
              label="Buscar etiquetas"
              variant="outlined"
              onAddChip={handleAdd}
              onDeleteChip={handleDelete}
              className={` mr-0 mb-0 ml-0`}
            />
            <button onClick={searchPost} className={`bg-blue-800 text-white uppercase w-full mt-2 rounded-md py-1`}>
              Search
            </button>
          </div>
          <Form
            currentId={currentId}
            setCurrentId={setCurrentId}
            className={``}
          />
          {
            <div className={`rounded-md mt-4 p-4 shadow-2xl`}>
              <Pagination page={page} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
