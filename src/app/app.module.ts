import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { UsersComponent } from './components/users/users.component';
import { ResourceComponent } from './components/resource/resource.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ResourcePageComponent } from './pages/resource-page/resource-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ModalComponent,
    UsersComponent,
    ResourceComponent,
    UsersPageComponent,
    ResourcePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
