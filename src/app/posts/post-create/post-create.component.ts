import { Component } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter<Post>();  ** @Output() Used if doing data binding instead of chosen service approach

  constructor(private postsService: PostsService) {}
  

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    // this.postCreated.emit(post); ** Used if using @Output() and EventEmitter
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
