import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import {FormsModule} from '@angular/forms';
import { PlayService } from './services/playService';
import { PlayFormComponent } from './components/play-form/play-form.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PlayFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ PlayService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
