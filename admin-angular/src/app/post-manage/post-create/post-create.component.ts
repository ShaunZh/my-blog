import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  postForm = this.fb.group({
    title: ['', Validators.required],
    tags: [[]],
    postContent: ['']
  })

  tags = [
    { label: '文学', value: '1' },
    { label: '音乐', value: '2' },
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
