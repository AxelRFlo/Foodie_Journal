import { Component, OnInit, Input} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() idJourney;
  nombre = { 0:"American", 1:"Korean", 2:"Italian", 3:"Mexican", 4:"Japanese" };
  constructor(private _router: Router,  private route: ActivatedRoute) { }

  foods(id): void {
    this._router.navigate(['/journeys/' + id]);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idJourney = params['id'];
      // Especificamos cual es mi journey actual en LS
      });
  }

}
