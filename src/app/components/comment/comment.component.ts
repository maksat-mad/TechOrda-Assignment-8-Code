import {Component, Input} from '@angular/core';
import {PostComment} from "../../models/post-comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment: PostComment;
}
