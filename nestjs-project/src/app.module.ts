import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersController } from "./controllers/users/users.controller";
import { UsersService } from "./services/users/users.service";

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
