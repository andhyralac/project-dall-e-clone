import { Router } from 'express';
import { handleOpenAI } from '../controllers/dalle.controller.js'

const router = Router();


router
    .post('/', handleOpenAI)






export default router;