import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { BlogDTO } from './blog.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>
    ){}

    getAllBooks() {
        return this.blogRepository.find();
    }

    async findById(id: number) {
        return await this.blogRepository.findOne(id);
    }

    async createBlog(blogDto: BlogDTO) {
        const data = await this.blogRepository.create(blogDto).save();
        return data;
    }
}
