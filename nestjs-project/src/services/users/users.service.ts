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
    { id: 3, name: 'Alice', email: 'alice@example.com' },
    { id: 4, name: 'Bob', email: 'bob@example.com' },
    { id: 5, name: 'Charlie', email: 'charlie@example.com' },
  ];

  // Obtener todos los usuarios
  findAll(): User[] {
    return this.users;
  }

  // Obtener usuarios con paginación
  findPaginated(page: number = 1, limit: number = 10): { users: User[], page: number, totalPages: number} {

   // Determinar el índice de inicio y fin de los usuarios a mostrar en la página
   const start = (page - 1) * limit;
   const end = start + limit;

   // Total de usuarios
   const total = this.users.length;

   // Obtener la lista de usuarios paginados
   const paginatedUsers = this.users.slice(start, end);

   // Número total de páginas
   const totalPages = Math.ceil(total / limit);

    return {
      users: paginatedUsers,
      page,
      totalPages
    }
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
