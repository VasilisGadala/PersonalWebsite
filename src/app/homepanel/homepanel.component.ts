import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ElementRef} from "@angular/core";
import {ViewChild} from "@angular/core";
import {AfterViewInit} from "@angular/core";
@Component({
  selector: 'app-homepanel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepanel.component.html',
  styleUrls: ['./homepanel.component.css']
})
export class HomepanelComponent {}
