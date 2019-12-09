import { Router } from 'express';
import * as passport from 'passport';
import { BlogController } from '../controllers/blogController'; 
import { UserController } from '../controllers/userController';
import { ProfileController } from '../controllers/profileController';
import { GalleryController } from '../controllers/galleryController';
import { CommentController } from '../controllers/commentController';

const userController = new UserController();
const blogController = new BlogController();
const commentController = new CommentController();
const profileController = new ProfileController();
const gallaryController = new GalleryController();

const router = Router();

router.get('/users', userController.getUsers)
router.put('/users/:id', userController.updateUser)
router.post('/login', userController.signIn)
router.post('/signup', userController.signUp)

router.post('/posts', blogController.create)
router.get('/posts', blogController.getPosts)
router.put('/posts/:id', blogController.updatePost)
router.delete('/posts/:id', blogController.removePost)

router.get('/comments', commentController.getComments)
router.post('/comments', commentController.addComment)

router.post('/profile', profileController.create)
router.get('/profile', profileController.getProfile)

router.delete('/assets/:id', gallaryController.removeOne)

export default router;