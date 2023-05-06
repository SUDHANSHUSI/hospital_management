import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalPannelComponent } from './hospital-pannel.component';
import { HospitalRoutingModule } from './hospital-routing.module';
import { MaterialModule } from 'src/material.module';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HospitalPannelComponent, MainComponent, TableComponent],
  imports: [CommonModule, HospitalRoutingModule, MaterialModule, RouterModule],
  exports: [HospitalPannelComponent, MainComponent, RouterModule],
})
export class HospitalModule {}
