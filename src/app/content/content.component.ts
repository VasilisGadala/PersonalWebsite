import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepanelComponent} from "./homepanel/homepanel.component";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, HomepanelComponent, AboutComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

}
