import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { type } from "os";
import { CommentEntity } from "src/comment/comment.entity";

@Entity('blogs')
export class BlogEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('text')
    description: string;

    @OneToMany(type => CommentEntity, coments => coments.blog)
    comments: CommentEntity[];
}