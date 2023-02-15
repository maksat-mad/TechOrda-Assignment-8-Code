import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {PostErrorService} from "../../services/post-error.service";

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  title = 'TechOrda-Assignment-8';
  loading = false;

  constructor(public postService: PostService,
              public errorService: PostErrorService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.postService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
