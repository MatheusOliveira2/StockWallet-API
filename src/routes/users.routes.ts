import { Router } from 'express';

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  try {
    return res.send();
  } catch (error) {}
});

export default usersRouter;
