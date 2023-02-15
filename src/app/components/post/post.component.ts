import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {CommentService} from "../../services/comment.service";
import {PostComment} from "../../models/post-comment";
import {CommentErrorService} from "../../services/comment-error.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  @Input() post: Post;
  openComments: boolean = false;
  loading: boolean = false;
  comments: PostComment[] = [];

  constructor(public commentService: CommentService,
              public errorService: CommentErrorService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.commentService.getByPostId(this.post.id).subscribe((comments) => {
      this.loading = false;
      this.comments = comments;
    });
  }
}
