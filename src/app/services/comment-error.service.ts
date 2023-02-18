import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentErrorService {

  errorMessage: string = '';

  handle(message: string) {
    this.errorMessage = message;
  }
}
