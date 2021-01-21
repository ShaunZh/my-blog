import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { PostService } from './post.service'
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  providers: [PostService]
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
  pageEvent: PageEvent = {
    pageSize: 10,
    pageIndex: 1,
    length: 0
  };

  constructor(private fb: FormBuilder, private postService: PostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator
  }

  onSubmit() {
    if (this.filterForm.valid) {
      console.log('onSubmit', this.filterForm, this.pageEvent)
      const { pageIndex = 1, pageSize = 10 } = this.pageEvent
      const { keywords = '', tag = '' } = this.filterForm.value
      this.postService.getPosts({
        page: {
          pageIndex,
          pageSize
        },
        data: {
          keywords,
          tag
        }
      }).subscribe(result => {
        console.log('result: ', result)
      })
    } else {
      console.log('fail')
    }
  }

  onPageEvent(e: PageEvent) {
    this.pageEvent = e;
    console.log('onPageEvent: ', e)
  }

  onOpenDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "提示",
        message: "确认删除?"
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('点击确认删除')
        return;
      }
      console.log('点击取消')
    })
  }
}

