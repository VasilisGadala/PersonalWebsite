import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <section class="info">
        <app-homepanel></app-homepanel>
        <app-infobar></app-infobar>
      </section>
<!--      <section class = "new"><app-infopanel></app-infopanel></section>-->
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vasilis Gadala';
}
