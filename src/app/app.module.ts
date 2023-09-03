import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepanelComponent } from "./content/homepanel/homepanel.component";
import { InfobarComponent } from "./infobar/infobar.component";
import {AboutComponent} from "./content/about/about.component";
import {ContentComponent} from "./content/content.component";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HomepanelComponent,
    InfobarComponent,
    BrowserModule,
    AboutComponent,
    ContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
