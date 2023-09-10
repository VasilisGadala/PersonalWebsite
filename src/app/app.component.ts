import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-content></app-content>
      <section class="info">
        <app-infobar></app-infobar>
      </section>
    </main>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vasilis Gadala';
}
