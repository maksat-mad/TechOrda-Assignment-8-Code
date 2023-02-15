import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Post} from "../models/post";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {PostErrorService} from "./post-error.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient,
              private errorService: PostErrorService
  ) { }

  posts: Post[] = [];

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: new HttpParams({
        fromObject: {_limit: 10}
      })
    }).pipe(
      delay(2000),
      retry(2),
      tap(posts => this.posts = posts),
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
