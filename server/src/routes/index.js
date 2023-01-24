import { Router } from 'express';
import postRoutes from './post.routes.js'
import dalleRoutes from './dalle.routes.js'


const router = Router();


router.use('/posts', postRoutes);
router.use('/dalle', dalleRoutes);



export default router;