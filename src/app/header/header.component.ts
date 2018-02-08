import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() idJourney;
  nombre = { 0:"American", 1:"Korean", 2:"Italian", 3:"Mexican", 4:"Japanese" };
  constructor(private _router: Router) { }

  foods(id): void {
    this._router.navigate(['/journeys/'+id]);
    window.location.reload();
  }

  ngOnInit() {
  }

}
