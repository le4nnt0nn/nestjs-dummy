import { UsersService } from '../../services/users/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("../../services/users/users.service").User[];
    findPaginated(page?: number, limit?: number): {
        users: import("../../services/users/users.service").User[];
        page: number;
        totalPages: number;
    };
    findOne(id: string): import("../../services/users/users.service").User;
    create(body: {
        id: number;
        name: string;
        email: string;
    }): import("../../services/users/users.service").User;
    delete(id: string): {
        message: string;
    };
}
