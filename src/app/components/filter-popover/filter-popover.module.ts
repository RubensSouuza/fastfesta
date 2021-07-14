import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterPopoverComponent } from './filter-popover.component';

@NgModule({
   imports: [CommonModule, FormsModule, IonicModule],
   declarations: [FilterPopoverComponent],
   exports: [FilterPopoverComponent]
})
export class FilterPopoverComponentModule { }
