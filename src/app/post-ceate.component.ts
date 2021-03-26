import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-ceate',
  templateUrl: './post-ceate.component.html',
  styleUrls: ['./post-ceate.component.css']
})
export class PostCeateComponent implements OnInit {

  constructor() { }

  posts: Post = {
    enteredTitle: '',
    enteredMsg: ''
  };
  @Output() postCreated = new EventEmitter<Post>();

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onAddForm(form: NgForm)
  {
    console.log(form.value);
    const post: Post = {
      enteredTitle: form.value.enteredTitle,
      enteredMsg: form.value.enteredMsg
    };

    this.postCreated.emit(post);

  }

}
