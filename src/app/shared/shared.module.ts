import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, ReactiveFormsModule, FormsModule],
  declarations: [HeaderComponent, SidebarComponent, ModalComponent],
  providers: [NgbActiveModal, DatePipe],
  exports: [HeaderComponent, SidebarComponent, ModalComponent],
})
export class SharedModule {}
