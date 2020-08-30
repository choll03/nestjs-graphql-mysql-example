import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './comment.entity';
import { Repository } from 'typeorm';
import { BlogEntity } from 'src/blog/blog.entity';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(CommentEntity)
        private commentRepository: Repository<CommentEntity>
    ){}

    findAll(blogId: number) {
        return this.commentRepository.find({ where: {blog: blogId} });
    }

    async createComment(blog: BlogEntity) {
        let comment = new CommentEntity();
        comment.comment = 'Oh oke siap';
        comment.blog = blog;
        let response = await this.commentRepository.save(comment);
        return response;
    }
}
