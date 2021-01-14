import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMaterialComponent } from './test-material/test-material.component';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';
import { TagManageComponent } from './tag-manage/tag-manage.component'
import { PostManageComponent } from './post-manage/post-manage.component'

const routes: Routes = [
  { path: 'testMaterial', component: TestMaterialComponent },
  { path: 'testNavigation', component: TestNavigationComponent },
  { path: 'tagManage', component: TagManageComponent },
  { path: 'postManage', component: PostManageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
