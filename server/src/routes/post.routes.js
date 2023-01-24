import { Router } from 'express';
import { createPost, getPosts } from '../controllers/post.controllers.js'

const router = Router();


router
    .get('/', getPosts)
    .post('/', createPost)





export default router;