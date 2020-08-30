import { Resolver, Query, Parent, Args, Mutation } from '@nestjs/graphql';
import { CommentService } from './comment.service';

@Resolver('Comment')
export class CommentResolver {
    constructor(
        private commentService: CommentService
    ){}


    @Query()
    comments(@Args('blog_id') blogId: number) {
        return this.commentService.findAll(blogId);
    }

}
