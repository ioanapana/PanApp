import { Component, OnInit } from '@angular/core';
import { Panneau } from '../service/panneau';
import { PanneauService } from '../service/panneau.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: string[] = ['Danger', 'Indication', 'Zone', 'Traveaux'];
  panneaux: Panneau[] = null;
  initialList = true;
  constructor(private panneauService: PanneauService, private router: Router) { }

  ngOnInit() {
    this.getPanneaux();
  }

  getPanneaux() {
    this.panneaux = this.panneauService.getAll();
  }

  onClickCategorie(categorie) {
    this.initialList = false;
    this.panneaux = this.panneauService.getByCategory(categorie);
    }
  

  onClickPanneau(panneauId) {
    let navigationExtras: NavigationExtras = {
      queryParams: { id: panneauId }
    }
    this.router.navigate(['panneau-detail'], navigationExtras)
  }  
}
