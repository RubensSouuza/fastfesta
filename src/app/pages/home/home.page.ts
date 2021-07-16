/* eslint-disable @angular-eslint/use-lifecycle-interface */

import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { FilterPopoverComponent } from '../../components/filter-popover/filter-popover.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  currentPopover = null;
  slideOpts = {
    initialSlide: 1,
    speed: 300,
    autoplay: true,
    loop: true,
    slidesPerView: 1.1,
    centeredSlides: true
  };

  slideCategoryOpts = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    slidesOffsetBefore: 11,
    freeMode: true,
  };

  routerDetails = ['details', Math.floor(Math.random() * 10)];
  loading: HTMLIonLoadingElement;
  private product = new Array<Product>();
  private productsSubscription: Subscription;
  private productsService: any;

  constructor(
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    ) {
    this.productsSubscription = this.productsService.get.Products().Subscribe(data => {
      this.product = data;
    });
  }
  async deleteProduct(id: string) {
    try{
      await this.productsService.deleteProduct(id);
    }catch(erro){
      this.presentToast('Erro ao tentar salvar');
    }
  }
  async presentLoading(){
    this.loading = await this.loadingCtrl.create({ message: 'Por Favor, aguarde...'});
  }

  async presentFilter(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: FilterPopoverComponent,
      event: ev,
      translucent: true
    });

    this.currentPopover = popover;
    await popover.present();
  }
  async presentToast(message: string){
  const toast = await this.toastCtrl.create({ message, duration: 2000});
}
ngOnDestroy() {
  this.productsSubscription.unsubscribe();
}
}
