import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

export interface PeriodicElement {
  position: number;
  title: string;
  abstract: string;
  tag: string;
  createDate: string;
  updateDate: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, title: '第一篇文章', abstract: '文章摘要', tag: '文学', createDate: '2021-01-15', updateDate: '2021-01-16', status: '正常' },

];
@Component({
  selector: 'app-post-manage',
  templateUrl: './post-manage.component.html',
  styleUrls: ['./post-manage.component.scss'],
})
export class PostManageComponent implements OnInit {

  filterForm = this.fb.group({
    keywords: [''],
    tag: [''],
    startDate: [''],
    endDate: ['']
  })

  tags = [
    { label: '文学', value: '1' },
    { label: '音乐', value: '2' },
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator
  displayedColumns: string[] = ['title', 'abstract', 'tag', 'createDate', 'updateDate', 'status', 'operate']
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA)

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator
  }

  onSubmit() {
    if (this.filterForm.valid) {
      console.log('onSubmit')
    } else {
      console.log('fail')
    }
  }

}
