import { Router } from 'express';

const router = Router();
const Controller = require('../controllers/post'); 


router.get('/posts', Controller.getAll)
router.post('/posts', Controller.create)



module.exports = router;