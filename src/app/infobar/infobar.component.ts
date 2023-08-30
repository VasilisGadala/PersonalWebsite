import {Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepanelComponent} from "../homepanel/homepanel.component";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-infobar',
  standalone: true,
  imports: [CommonModule, HomepanelComponent, RouterLink],
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent {
  activeSection: string = 'home'; // Initialize active section

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.detectActiveSection();

  }

  scrollToSection(sectionId: string) {
    const targetSection = document.querySelector(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth' // Add this option for smooth scrolling
      });
    }
  }

  detectActiveSection() {
    const sections = ['home', 'about', 'resume', 'projects', 'socials', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          this.activeSection = section;
          break;
        }

      }
    }
  }
}
