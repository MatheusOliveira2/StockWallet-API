import { Request, Response } from 'express';

import CreateUserService from '../services/User/CreateUserService';
import ListAllUserService from '../services/User/ListAllUserService';

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
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
  }

  public async listAll(req: Request, res: Response): Promise<Response> {
    const listAllService = new ListAllUserService();

    const users = await listAllService.execute();

    return res.status(200).json(users);
  }
}
