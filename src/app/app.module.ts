import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepanelComponent } from "./homepanel/homepanel.component";
import { InfobarComponent } from "./infobar/infobar.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'infobar', component: InfobarComponent },
  { path: 'homepanel', component: HomepanelComponent }
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HomepanelComponent,
    InfobarComponent,
    BrowserModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 60]})
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
