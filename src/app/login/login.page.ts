import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
    component: CadastroComponent,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  }

}
