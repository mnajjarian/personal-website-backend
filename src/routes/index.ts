import { Router } from 'express';
import * as passport from 'passport';
import { BlogController } from '../controllers/blogController'; 
import { UserController } from '../controllers/userController';
import { ProfileController } from '../controllers/profileController';

const userController = new UserController();
const blogController = new BlogController();
const profileController = new ProfileController();
const router = Router();

router.get('/users', userController.getUsers)
router.put('/users/:id', userController.updateUser)
router.post('/login', userController.signIn)
router.post('/signup', userController.signUp)

router.post('/posts', blogController.create)
router.get('/posts', blogController.getPosts)

router.post('/profile', profileController.create)
router.get('/profile', profileController.getProfile)


export default router;