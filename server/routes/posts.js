import express from "express";


import { createPost, getPosts, updatePost, deletePost, likePost } from "../controllers/posts.js";
import auth from "../middleware/auth.js"



const router = express.Router();


router.get("/", getPosts);

router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", auth, likePost)



export default router;