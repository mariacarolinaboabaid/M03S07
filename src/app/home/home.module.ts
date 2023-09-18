import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
