import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSliderModule } from '@angular/material/slider';
import { TestMaterialComponent } from './test-material/test-material.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestNavigationComponent } from './test-navigation/test-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { SidenavHeaderComponent } from './sidenav-header/sidenav-header.component';
import { TagManageComponent } from './tag-manage/tag-manage.component';
import { PostManageComponent } from './post-manage/post-manage.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'


import { HttpErrorHandlerService } from './http-error-handler.service'
import { AuthService } from './auth.service'
import { httpInterceptorProviders } from './http-interceptors/index'
import { HttpService } from './http.service'

import { PostCreateComponent } from './post-manage/post-create/post-create.component';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TestMaterialComponent,
    TestNavigationComponent,
    LayoutHeaderComponent,
    NavListComponent,
    SidenavHeaderComponent,
    TagManageComponent,
    PostManageComponent,
    PostCreateComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [HttpErrorHandlerService, AuthService, httpInterceptorProviders, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
