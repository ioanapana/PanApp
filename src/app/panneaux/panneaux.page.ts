import { Component, OnInit } from '@angular/core';
import { PanneauService } from '../service/panneau.service';
import { Router, NavigationExtras } from '@angular/router';
import { Panneau } from '../service/panneau';

@Component({
  selector: 'app-panneaux',
  templateUrl: './panneaux.page.html',
  styleUrls: ['./panneaux.page.scss'],
})
export class PanneauxPage implements OnInit {

  panneaux: Panneau[] = null;

  constructor(private panneauService: PanneauService, private router: Router) { }

  ngOnInit() {
    this.getPanneaux();
  }

  getPanneaux() {
    this.panneaux = this.panneauService.getAll();
  }

  onClickPanneau(panneauId) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: panneauId }
    }
    this.router.navigate(['panneau-detail'], navigationExtras)
  }  


}
