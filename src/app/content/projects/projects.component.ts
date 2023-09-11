import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.checkElementsInView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkElementsInView();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.checkElementsInView();
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
