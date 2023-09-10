import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResumeComponent} from "../resume/resume.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ResumeComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
