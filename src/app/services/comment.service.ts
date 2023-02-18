import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {PostComment} from "../models/post-comment";
import {CommentErrorService} from "./comment-error.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient,
              private errorService: CommentErrorService
  ) {
  }

  comments: PostComment[] = [];

  getByPostId(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>('https://jsonplaceholder.typicode.com/comments?postId=' + postId).pipe(
      retry(2),
      tap(comments => this.comments = comments),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
