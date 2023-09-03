import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <section class="info">
        <app-content></app-content>
        <app-infobar></app-infobar>
      </section>
    </main>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vasilis Gadala';
}
