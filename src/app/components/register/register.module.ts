import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
   imports: [CommonModule, FormsModule, IonicModule, RouterModule],
   declarations: [RegisterComponent],
   exports: [RegisterComponent]
})
export class RegisterComponentModule { }
