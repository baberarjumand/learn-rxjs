import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Example1aPageRoutingModule } from './example1a-routing.module';

import { Example1aPage } from './example1a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Example1aPageRoutingModule
  ],
  declarations: [Example1aPage]
})
export class Example1aPageModule {}
