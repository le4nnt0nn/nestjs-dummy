export interface User {
    id: number;
    name: string;
    email: string;
}
export declare class UsersService {
    private users;
    findAll(): User[];
    findPaginated(page?: number, limit?: number): {
        users: User[];
        page: number;
        totalPages: number;
    };
    findOne(id: number): User | undefined;
    create(user: User): User;
    delete(id: number): void;
}
