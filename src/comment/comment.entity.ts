import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { BlogEntity } from "src/blog/blog.entity";

@Entity('comments')
export class CommentEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id : number;

    @Column('text')
    comment: string;

    @ManyToOne(type => BlogEntity, blog => blog.id)
    blog: BlogEntity
}