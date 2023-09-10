import {AfterViewInit, Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements AfterViewInit {
  offsetHeight: number = 0;

  ngAfterViewInit() {
    // Calculate the initial offset height after the view is initialized
    this.offsetHeight = this.calculateOffsetHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Recalculate and update offsetHeight on window resize
    this.offsetHeight = this.calculateOffsetHeight();
  }

  calculateOffsetHeight(): number {
    // Query for the 'app-text-dependent-component' element by its CSS class or ID
    const textDependentComponent = document.querySelector('app-about');

    if (textDependentComponent) {
      // Get the height of 'app-text-dependent-component'
      // You can add any additional logic here if needed

      // Return the calculated offset height
      return textDependentComponent.clientHeight;
    }

    // Default to 0 if the element is not found (or handle this case differently)
    return 0;
  }
}



