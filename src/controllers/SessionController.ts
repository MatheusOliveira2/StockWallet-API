import { Request, Response } from 'express';

import AuthenticateUserService from '../services/Authenticate/AuthenticateUserService';

export default class SessionController {
  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const authenticateUser = new AuthenticateUserService();

      const { user, token } = await authenticateUser.execute({
        email,
        password,
      });

      delete user.password;

      return res.json({ user, token });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}
