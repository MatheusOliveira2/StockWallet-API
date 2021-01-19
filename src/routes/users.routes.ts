import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

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

    let { id, created_at, updated_at } = { ...user };

    return res.json({ name, email, id, created_at, updated_at });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;
