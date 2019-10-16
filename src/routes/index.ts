import { Router } from 'express';
import * as passport from 'passport';
import { BlogController } from '../controllers/blogController'; 
import { UserController } from '../controllers/userController';

const userController = new UserController();
const blogController = new BlogController();

const router = Router();

router.post('/login', userController.signIn)
router.post('/signup', userController.signUp)
router.get('/posts', blogController.create)
router.post('/posts', blogController.getPosts)



export default router;