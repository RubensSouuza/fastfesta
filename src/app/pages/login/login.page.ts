import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegisterComponent } from 'src/app/components/register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/tabs/home');
  }

  async presentRegister() {
    const modal = await this.modalCtrl.create({ component: RegisterComponent });
    await modal.present();
  }

}
