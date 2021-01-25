import { Request, Response } from 'express';
import ListAllUserService from '../services/ListAllUserService';

export default class UserController {
  public async listAll(req: Request, res: Response): Promise<Response> {
    const listAllService = new ListAllUserService();

    const users = await listAllService.execute();

    return res.status(200).json(users);
  }
}
