import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() idJourney;
  constructor(private _router: Router) { }

  foods(id): void {
    this._router.navigate(['/journeys/' + id]);
    window.location.reload();
  }

  ngOnInit() {
  }

}
