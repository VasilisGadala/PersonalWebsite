import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
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

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Calculate the initial offset height after the view is initialized
    this.offsetHeight = this.calculateOffsetHeight();
    this.checkElementsInView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Recalculate and update offsetHeight on window resize
    this.offsetHeight = this.calculateOffsetHeight();
    this.checkElementsInView();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.checkElementsInView();
  }

  calculateOffsetHeight(): number {
    // Query for the 'app-text-dependent-component' element by its CSS class or ID
    const textDependentComponent = this.el.nativeElement.querySelector('app-about');

    if (textDependentComponent) {
      // Get the height of 'app-text-dependent-component'
      // You can add any additional logic here if needed

      // Return the calculated offset height
      return textDependentComponent.clientHeight;
    }

    // Default to 0 if the element is not found (or handle this case differently)
    return 0;
  }

  checkElementsInView(): void {
    const elements = this.el.nativeElement.querySelectorAll('.fade-in-div');
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    elements.forEach((element: HTMLElement) => {
      const elementRect = element.getBoundingClientRect();

      // Check if the element is in the viewport
      if (elementRect.top <= windowHeight && elementRect.bottom >= 0) {
        this.renderer.addClass(element, 'fade-in');
      } else {
        this.renderer.removeClass(element, 'fade-in');
      }
    });
  }
}
