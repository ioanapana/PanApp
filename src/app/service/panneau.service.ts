import { Injectable } from '@angular/core';
import { Panneau } from './panneau';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class PanneauService {

  panneaux: Panneau[] = [
    {id: 1, img: 'assets/images/a2a.jpg', description: 'Cassis ou dos-d\'âne', categorie: 'Danger'},
    {id: 2, img: 'assets/images/a1a.jpg', description: 'Virage à droite.', categorie: 'Danger'},
    {id: 3, img: 'assets/images/a3b.jpg', description: 'Chaussée rétrécie par la gauche', categorie: 'Danger'},
    {id: 4, img: 'assets/images/a8.jpg', description: 'Passage à niveau sans barrières ni demi - barrières', categorie: 'Danger'},
    {id: 5, img: 'assets/images/c1a.jpg', description: 'Lieu aménagé pour le stationnement.', categorie: 'Indication'},
    {id: 6, img: 'assets/images/c4a.jpg', description: 'Vitesse conseillée. Ce panneau indique la vitesse à laquelle il est conseillé de circuler si les circonstances le permettent et si l\'usager n\'est pas tenu de respecter une vitesse inférieure spécifique à la catégorie de véhicule qu\'il conduit. En toutes circonstances, l\'usager doit rester maître de sa vitesse, conformément à l\'article R 413-17 du code de la route.', categorie: 'Indication'},
    {id: 7, img: 'assets/images/c13b.jpg', description: 'Présignalisation d’une impasse.', categorie: 'Indication'},
    {id: 8, img: 'assets/images/c28.jpg', description: 'Réduction du nombre de voies sur une route à chaussées séparées ou sur un créneau de dépassement à chaussées séparées.', categorie: 'Indication'},
    {id: 9, img: 'assets/images/b30.jpg', description: 'Entrée d\'une zone à vitesse limitée à 30 km/h', categorie: 'Zone'},
    {id: 10, img: 'assets/images/b6b1.jpg', description: 'Entrée d\'une zone à stationnement interdit', categorie: 'Zone'},
    {id: 11, img: 'assets/images/b50a.jpg', description: 'Sortie de zone à stationnement interdit', categorie: 'Zone'},
    {id: 12, img: 'assets/images/mini_b51.jpg', description: 'Sortie d\'une zone à vitesse limitée à 30 km/h', categorie: 'Zone'},
    {id: 13, img: 'assets/images/ak22.jpg', description: 'Projection de gravillons', categorie: 'Traveaux'},
    {id: 14, img: 'assets/images/ak17.jpg', description: 'Annonce de signaux lumineux réglant la circulation', categorie: 'Traveaux'},
    {id: 15, img: 'assets/images/kd8.jpg', description: 'Présignalisation de changement de chaussée', categorie: 'Traveaux'},
    {id: 16, img: 'assets/images/kd22.jpg', description: 'Direction de déviation', categorie: 'Traveaux'}
  ]

  constructor() { }
  getAll() {
    return this.panneaux;
  }

  get(id: number) {
    if (id < 0 || id >= this.panneaux.length) {
      return null;
    }
    return this.panneaux[id];
    }

    getByCategory(categorie: string) {
      let categoryList: Panneau[] = [];
      this.panneaux.forEach(function(panneau) {
        if ( categorie === panneau.categorie) {
          categoryList.push(panneau)
        }
      });
      return categoryList;
      }
}
