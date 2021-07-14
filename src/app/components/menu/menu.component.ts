import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private loading: any;

  constructor(
    private authService: AuthService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private menuCtrl: MenuController

  ) { }

  ngOnInit() {}

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch(error) {
      this.presentToast(error.message);
    } finally {
      this.loading.dismiss();
      this.menuCtrl.close();
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
