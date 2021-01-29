import { Router } from 'express';

import StockController from '../controllers/StockController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const stockController = new StockController();

usersRouter.post('/', ensureAuthenticated, stockController.create);
usersRouter.get('/', ensureAuthenticated, stockController.listAll);

export default usersRouter;
