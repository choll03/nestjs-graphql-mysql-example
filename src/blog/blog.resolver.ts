import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { CommentService } from 'src/comment/comment.service';
import { BlogEntity } from './blog.entity';

@Resolver('Blog')
export class BlogResolver {
    constructor(
        private blogService: BlogService,
        private commentService: CommentService
    ){}

    @Query()
    blogs() {
        return this.blogService.getAllBooks();
    }

    @Query()
    async blog(@Args('id') id: number) {
        return await this.blogService.findById(id);
    }

    @ResolveField()
    comments(@Parent() { id }: BlogEntity) {
        return this.commentService.findAll(id);
    }

    @Mutation()
    async createBlog(@Args('title') title: string, @Args('description') description: string) {
        return await this.blogService.createBlog({
            title,
            description
        });
    }

    @Mutation()
    async createComment(@Args('blog_id') blog_id: number, @Args('comment') comment: string ) {
        let blog = await this.blogService.findById(blog_id);
        return await this.commentService.createComment(blog);
    }
}
