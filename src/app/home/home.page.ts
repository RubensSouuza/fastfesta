import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ModalController, PopoverController } from '@ionic/angular';
import { ProdutoComponent } from '../produto/produto.component';
import { FiltroComponent } from './filtro/filtro.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  currentPopover = null;

  constructor(private popoverController: PopoverController, private modalController: ModalController) { 
    
  }

  ngOnInit() {
  }

  async presentFiltro(ev: any) {
    const popover = await this.popoverController.create({
      component: FiltroComponent,
      event: ev,
      translucent: false
    });
    this.currentPopover = popover;
  
    await popover.present();
  }

  dismissPopover() {
    if (this.currentPopover) {
      this.currentPopover.dismiss().then(() => { this.currentPopover = null; });
    }
  }

  async presentProduto() {
    const modal = await this.modalController.create({
    component: ProdutoComponent,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
  }


}
