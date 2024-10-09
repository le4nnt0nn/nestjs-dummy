"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
            { id: 3, name: 'Alice', email: 'alice@example.com' },
            { id: 4, name: 'Bob', email: 'bob@example.com' },
            { id: 5, name: 'Charlie', email: 'charlie@example.com' },
        ];
    }
    findAll() {
        return this.users;
    }
    findPaginated(page = 1, limit = 10) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const total = this.users.length;
        const paginatedUsers = this.users.slice(start, end);
        const totalPages = Math.ceil(total / limit);
        return {
            users: paginatedUsers,
            page,
            totalPages
        };
    }
    findOne(id) {
        return this.users.find(user => user.id === id);
    }
    create(user) {
        this.users.push(user);
        return user;
    }
    delete(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map