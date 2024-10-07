/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

// Simulamos una base de datos en memoria
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ];

  // Obtener todos los usuarios
  findAll(): User[] {
    return this.users;
  }

  // Obtener un usuario por su ID
  findOne(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Crear un nuevo usuario
  create(user: User): User {
    this.users.push(user);
    return user;
  }

  // Eliminar un usuario por su ID
  delete(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
