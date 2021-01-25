import { Router } from 'express';

import UserController from '../controllers/UserController';
import CreateUserService from '../services/CreateUserService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

usersRouter.get('/', ensureAuthenticated, async (req, res) => {
  res.json('ListAll');
});

export default usersRouter;
