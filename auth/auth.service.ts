/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  private users = [
    {
      userId: 1,
      username: 'anton',
      password: bcrypt.hashSync('changeme', 10),  // Contraseña cifrada
    },
    {
      userId: 2,
      username: 'maria',
      password: bcrypt.hashSync('guess', 10),  // Contraseña cifrada
    },
  ];

  async findOneByUsername(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && bcrypt.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
