import { Router } from 'express';

import UserController from '../controllers/UserController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const userController = new UserController();

usersRouter.post('/', ensureAuthenticated, userController.create);

usersRouter.get('/', ensureAuthenticated, userController.listAll);

export default usersRouter;
