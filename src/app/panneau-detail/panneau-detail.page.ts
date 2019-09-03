import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanneauService } from '../service/panneau.service';
import { Panneau } from '../service/panneau';

@Component({
  selector: 'app-panneau-detail',
  templateUrl: './panneau-detail.page.html',
  styleUrls: ['./panneau-detail.page.scss'],
})
export class PanneauDetailPage implements OnInit {

  panneau: Panneau = null;

  constructor(private route: ActivatedRoute, private panneauService: PanneauService) {
    this.route.queryParams.subscribe(params => {
      if (params && params.id) {
        console.log('id ', params.id);
        this.panneau = this.panneauService.get(params.id);
        console.log(this.panneau)
      }
    });
    }

  ngOnInit() {
  }

}
