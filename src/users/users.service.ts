import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

//   async findOne(id: number): Promise<User> {
//     return await this.userRepository.findOne(id);
//   }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

//   async update(id: number, user: User): Promise<User> {
//     await this.userRepository.update(id, user);
//     return await this.userRepository.findOne(id);
//   }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
