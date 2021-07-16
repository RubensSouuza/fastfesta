/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { User } from 'src/app/interfaces/user';

import { Subscription } from 'rxjs';
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private loading: any;
  private productID: string = null;
  private productsSubscription: Subscription;
  private product: Product;


  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService: AuthService,
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
    private navCrl: NavController
  ) {
    this.productID = this.activeRoute.snapshot.params.id;

    if (this.productID) { this.loadProduct(); }
  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.productsSubscription) { this.productsSubscription.unsubscribe(); }
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde....' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000, color: 'danger' });
    return toast.present();
  }
  async saveProduct() {
    await this.presentLoading();

    this.product.userID = this.AuthService.getAuth().currentUser.uid.uid;

    if (this.productID) {
      try {
        await this.productService.updateProduct(this.productID, this.product);
        await this.loading.dismiss();

        this.navCrl.navigateBack('/home');
      } catch (erro) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    } else {
      this.product.createdAT = new Date().getTime();

      try {
        await this.productService.addProduct(this.product);
        await this.loading.dismiss();

        this.navCrl.navigateBack('/home');
      } catch (erro) {
        this.presentToast('Erro ao tentar salvar');
        this.loading.dismiss();
      }
    }
  }
  loadProduct() {
    this.productsSubscription = this.productService.getProduct(this.productID).subscribe(data => {
      this.product = data;
    });
  }
  addItem() {

  }

}
