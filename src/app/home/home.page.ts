import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Items1Component } from '../items/items1/items1.component';
import { Items2Component } from '../items/items2/items2.component';
import { Items3Component } from '../items/items3/items3.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverController: PopoverController) {}

  async presentPopover1(eve) {
    const popover = await this.popoverController.create({
      component: Items1Component,
      componentProps: {
      },
      cssClass: 'my-custom-class',
      event: eve,
      mode: 'ios',
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentPopover2(eve) {
    const popover = await this.popoverController.create({
      component: Items2Component,
      componentProps: {
      },
      cssClass: 'my-custom-class',
      event: eve,
      mode: 'ios',
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentPopover3(eve) {
    const popover = await this.popoverController.create({
      component: Items3Component,
      componentProps: {
      },
      cssClass: 'my-custom-class',
      event: eve,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}

