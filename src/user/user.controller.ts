import { Controller, Get, Post, Delete,Put, Body,UseGuards,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.dto';
import { ApiResponse } from '@nestjs/swagger';

import { AuthGuard } from '@nestjs/passport';



@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('/new')
    @ApiResponse({ status: 201, description: 'Record has been Successfully inserted'})
    async create(@Body() user: User) {
        this.userService.create(user);  
    }

    @Get()
    // @UseGuards(AuthGuard())
    async findAll(){
        return this.userService.findAll();
    }
    @Get(':id')
    findOneOrFail(@Param('id') id: number,@Body() data:Partial<User>) {
        return this.userService.showOne(id);
        
     }
          
    @Put(':id')
    update(@Param('id') id:number, @Body() data:Partial<User>){
        return this.userService.update(id,data);
    }
    
    
    @Delete(':id')
     remove(@Param('id') id: number) {
      return this.userService.destroy(id);
    }

    @Get(':email')
    findEmail(@Param('email') email: string,@Body() data:Partial<User>) {
        return this.userService.findeEail(email);
        
     }
}
