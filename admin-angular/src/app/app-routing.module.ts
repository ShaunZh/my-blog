import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMaterialComponent } from './test-material/test-material.component';

const routes: Routes = [
  { path: 'testMaterial', component: TestMaterialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
