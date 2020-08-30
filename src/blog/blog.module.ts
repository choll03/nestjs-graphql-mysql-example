import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { BlogService } from './blog.service';
import { BlogResolver } from './blog.resolver';
import { CommentModule } from 'src/comment/comment.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogEntity]),
        CommentModule
    ],
    providers: [BlogService, BlogResolver],
    exports: [BlogService]
})
export class BlogModule {}
