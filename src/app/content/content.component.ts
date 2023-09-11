import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepanelComponent } from "./homepanel/homepanel.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, HomepanelComponent, AboutComponent, ResumeComponent, ProjectsComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkElementsInView();
  }

  ngAfterViewInit() {
    // Initially check if elements are in view after the page loads
    this.checkElementsInView();
  }

  checkElementsInView() {
    const elements = this.el.nativeElement.querySelectorAll('.fade-in-div');
    elements.forEach((element: HTMLElement) => {
      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is in the viewport
      if (elementRect.top <= windowHeight && elementRect.bottom >= 0) {
        this.renderer.addClass(element, 'fade-in');
      } else {
        this.renderer.removeClass(element, 'fade-in');
      }
    });
  }
}
