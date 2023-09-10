import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepanelComponent} from "./homepanel/homepanel.component";
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {ProjectsComponent} from "./projects/projects.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, HomepanelComponent, AboutComponent, ResumeComponent, ProjectsComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

}
