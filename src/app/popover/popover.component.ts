import { Component, OnInit } from '@angular/core';
import {PopoverModule, PopoverContent} from "ng2-popover";
import { FbauthComponent } from '../fbauth/fbauth.component';
import { HtmlParser } from '@angular/compiler';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  name = 'World';
  constructor() { }

  ngOnInit() {
  }
  
}
