import { getRepository } from 'typeorm';
import User from '../../models/User';

export default class ListAllUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    users.forEach((user) => delete user.password);

    return users;
  }
}
