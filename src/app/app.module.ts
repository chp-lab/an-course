import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigincomponentComponent } from './sigincomponent/sigincomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    SigincomponentComponent,
    ImagecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
