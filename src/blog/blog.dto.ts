import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class BlogDTO {
    @Field()
    readonly title: string;
    @Field()
    readonly description: string;
}