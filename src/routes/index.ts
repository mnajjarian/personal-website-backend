import { Router, Response, Request, NextFunction } from "express";
import { BlogController } from "../controllers/blogController";
import { UserController } from "../controllers/userController";
import { ProfileController } from "../controllers/profileController";
import { GalleryController } from "../controllers/galleryController";
import { CommentController } from "../controllers/commentController";

const userController = new UserController();
const blogController = new BlogController();
const commentController = new CommentController();
const profileController = new ProfileController();
const gallaryController = new GalleryController();

function checkAuthenticate(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.isAuthenticated()) {
    res.status(404).send({ error: "Not Authorized" });
  }
  next();
}

const router = Router();

router.get("/users", userController.getUsers);
router.put("/users/:id", checkAuthenticate, userController.updateUser);
router.post("/login", userController.signIn);
router.get("/logout", userController.logout);
router.post("/signup", userController.signUp);
router.get("/auth", userController.auth);

router.post("/posts", checkAuthenticate, blogController.create);
router.get("/posts", blogController.getPosts);
router.put("/posts/:id", checkAuthenticate, blogController.updatePost);
router.delete("/posts/:id", checkAuthenticate, blogController.removePost);

router.get("/comments", commentController.getComments);
router.post("/comments", commentController.addComment);
router.delete(
  "/comments/:id",
  checkAuthenticate,
  commentController.removeComment
);

router.post("/profile", profileController.create);
router.get("/profile", profileController.getProfile);

router.delete("/assets/:id", checkAuthenticate, gallaryController.removeOne);

export default router;
