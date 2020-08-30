import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
      TypeOrmModule.forFeature([UserEntity]), 
        HttpModule
    ],
  providers: [UserResolver, UserService],
  
})
export class UserModule {}
