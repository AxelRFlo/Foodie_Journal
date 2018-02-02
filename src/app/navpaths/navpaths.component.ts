import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navpaths',
  templateUrl: './navpaths.component.html',
  styleUrls: ['./navpaths.component.scss']
})
export class NavpathsComponent implements OnInit {
  private currentPath: string = "American";

  constructor() { }

  ngOnInit() {
  }

}
