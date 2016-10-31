import { Injectable } from '@angular/core';
import { Comment } from '../../model/comment/comment';
import { list_comment } from '../../model/comment/mock_comment';

@Injectable()
export class CommentService {

    constructor() { }

    getListComment() {
        return list_comment;
    }

    getListCommentPromise():Promise<Comment[]> {
        return Promise.resolve(list_comment);
    }
}