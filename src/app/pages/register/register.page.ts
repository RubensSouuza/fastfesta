import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userRegister: User = {};
  private loading: any;

  constructor(
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss();
  }

   async register() {
    await this.presentLoading();
    try {
      await this.authService.register(this.userRegister);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.modalCtrl.dismiss();
    }
  }

   async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Aguarde....' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000, color: 'danger'});
    return toast.present();
  }

}
