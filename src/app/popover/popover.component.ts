import { Component, OnInit } from '@angular/core';
import {PopoverModule, PopoverContent, Popover} from "ng2-popover";
import { FbauthComponent } from '../fbauth/fbauth.component';
import { HtmlParser } from '@angular/compiler';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';


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