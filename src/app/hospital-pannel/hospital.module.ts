import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalPannelComponent } from './hospital-pannel.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import { MaterialModule } from 'src/material.module';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { UpdatePopupComponent } from './update-popup/update-popup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HospitalPannelComponent,
    MainComponent,
    TableComponent,
    UpdatePopupComponent,
  ],
  imports: [CommonModule, HospitalRoutingModule, MaterialModule, RouterModule,ReactiveFormsModule],
  exports: [HospitalPannelComponent, MainComponent, RouterModule],
})
export class HospitalModule {}
