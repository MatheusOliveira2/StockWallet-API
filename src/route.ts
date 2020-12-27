import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: 'matheus',
    email: 'matheus@mail.com',
    password: '123456',
    techs: ['Node', 'React'],
  });
  return res.json({ message: 'HW' });
}
