import { Router } from 'express';
import  {Controller} from '../controllers/post'; 

const router = Router();



router.get('/posts', Controller.getAll)
router.post('/posts', Controller.create)



export default router;