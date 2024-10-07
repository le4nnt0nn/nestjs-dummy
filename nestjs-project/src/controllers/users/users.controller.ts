/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Ruta para obtener todos los usuarios
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Ruta para obtener un usuario por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  // Ruta para crear un nuevo usuario
  @Post()
  create(@Body() body: { id: number; name: string; email: string }) {
    return this.usersService.create(body);
  }

  // Ruta para eliminar un usuario por ID
  @Delete(':id')
  delete(@Param('id') id: string) {
    this.usersService.delete(Number(id));
    return { message: `User with ID ${id} deleted successfully` };
  }
}
