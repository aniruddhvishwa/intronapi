import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';
import { User } from '../user/user.dto';
import { Repository } from 'typeorm';


import { UserEntity } from '../user/user.entity';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
    // private readonly userRepository: Repository <UserEntity>
    ) {}

  async createToken() {
    const user: JwtPayload = { email: "email" };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // put some validation logic here
    // for example query user by id/email/username
    // return await this.userRepository.findOneByToken(token);

    return {};
  }
}
