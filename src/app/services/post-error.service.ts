import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostErrorService {

  error$ = new Subject<string>();

  handle(message: string) {
    this.error$.next(message);
  }
}
