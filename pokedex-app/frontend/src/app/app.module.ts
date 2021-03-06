import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Components

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FavouritesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: false,
      disableTimeOut: false,
      tapToDismiss: true,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      toastClass: 'ngx-toastr'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export default class AppModule { }
