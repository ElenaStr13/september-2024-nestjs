import { forwardRef, Module } from '@nestjs/common';

import { ArticlesModule } from '../articles/articles.module';
import { UsersService } from './services/users.service';
import { UsersAdminService } from './services/users-admin.service';
import { UsersAdminController } from './user.admin.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [forwardRef(() => ArticlesModule)],
  controllers: [UsersController, UsersAdminController],
  providers: [UsersService, UsersAdminService],
  exports: [UsersService],
})
export class UsersModule {}
