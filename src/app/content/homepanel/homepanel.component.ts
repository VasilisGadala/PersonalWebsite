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
export class HomepanelComponent {}
