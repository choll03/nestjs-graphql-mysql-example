
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Blog {
    id: number;
    title?: string;
    description?: string;
    comments: Comment[];
}

export interface IQuery {
    blogs(): Blog[] | Promise<Blog[]>;
    blog(id?: number): Blog | Promise<Blog>;
    comments(blog_id?: number): Comment[] | Promise<Comment[]>;
    me(): User | Promise<User>;
    userList(): User[] | Promise<User[]>;
}

export interface IMutation {
    createBlog(title?: string, description?: string): Blog | Promise<Blog>;
    createComment(blog_id?: number, comment?: string): Comment | Promise<Comment>;
}

export interface Comment {
    id: number;
    comment?: string;
}

export interface User {
    id: number;
    email: string;
    name?: string;
}
