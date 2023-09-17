import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ElementRef} from "@angular/core";
import {ViewChild} from "@angular/core";
import {AfterViewInit} from "@angular/core";
import {AboutComponent} from "../about/about.component";
@Component({
  selector: 'app-homepanel',
  standalone: true,
  imports: [CommonModule, AboutComponent],
  templateUrl: './homepanel.component.html',
  styleUrls: ['./homepanel.component.css']
})
export class HomepanelComponent {
  ngOnInit(): void {
    // Get a reference to the video elements
    const videoElement = document.getElementById('background-video') as HTMLVideoElement;

    // Check if the video is paused (not playing) and if it's not at the end
    if (videoElement.paused && videoElement.currentTime !== videoElement.duration) {
      // If paused and not at the end, play the video
      videoElement.play();
    }
  }
}
