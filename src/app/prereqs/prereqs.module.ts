import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrereqsPageRoutingModule } from './prereqs-routing.module';

import { PrereqsPage } from './prereqs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrereqsPageRoutingModule
  ],
  declarations: [PrereqsPage]
})
export class PrereqsPageModule {}
