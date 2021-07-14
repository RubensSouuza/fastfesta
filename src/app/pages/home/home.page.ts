import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FilterPopoverComponent } from '../../components/filter-popover/filter-popover.component';

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
  }

  slideCategoryOpts = {
    slidesPerView: 3.5,
    spaceBetween: 10,
    slidesOffsetBefore: 11,
    freeMode: true,
  }

  routerDetails = ['details', Math.floor(Math.random() * 10)];

  constructor(private popoverCtrl: PopoverController, private modalCtrl: ModalController) { }

  async presentFilter(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: FilterPopoverComponent,
      event: ev,
      translucent: true
    });

    this.currentPopover = popover;
    await popover.present();
  }

}
