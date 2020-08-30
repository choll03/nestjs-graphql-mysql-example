import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CommentEntity
        ]),
    ],
    providers: [CommentService, CommentResolver],
    exports: [CommentService]
})
export class CommentModule {}
