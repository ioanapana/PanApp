import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menuItems = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Panneaux', url: '/panneaux', icon: 'car'},
    {title: 'Catégories', url: '/categories', icon: 'search'},
    {title: 'Quiz', url: '/quiz', icon: 'checkmark-circle-outline'},
    {title: 'Paramétres', url: '/parametres', icon: 'settings'},
    {title: 'Noter l\'appli', url: '/note', icon: 'thumbs-up'},
    ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
