import { getRepository } from 'typeorm';
import User from '../models/User';

class ListAllUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find();

    if (users) {
      throw new Error('Email address already used.');
    }
    return users;
  }
}

export default CreateUserService;
