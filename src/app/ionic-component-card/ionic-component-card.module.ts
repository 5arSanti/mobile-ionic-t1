import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonicComponentCardComponent } from './ionic-component-card.component';

@NgModule({
  declarations: [IonicComponentCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonicComponentCardComponent]
})
export class IonicComponentCardModule {}
