import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMaterialComponent } from './test-material/test-material.component';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';

const routes: Routes = [
  { path: 'testMaterial', component: TestMaterialComponent },
  { path: 'testNavigation', component: TestNavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
