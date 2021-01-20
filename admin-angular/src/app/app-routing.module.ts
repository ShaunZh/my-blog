import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMaterialComponent } from './test-material/test-material.component';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';
import { TagManageComponent } from './tag-manage/tag-manage.component'
import { PostManageComponent } from './post-manage/post-manage.component'
import { PostCreateComponent } from './post-manage/post-create/post-create.component'
import { PostEditComponent } from './post-manage/post-edit/post-edit.component'

const routes: Routes = [
  { path: 'testMaterial', component: TestMaterialComponent },
  { path: 'testNavigation', component: TestNavigationComponent },
  { path: 'tagManage', component: TagManageComponent },
  { path: 'postManage', component: PostManageComponent },
  { path: 'postManage/create', component: PostCreateComponent },
  { path: 'postManage/edit', component: PostEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
