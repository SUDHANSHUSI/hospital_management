import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalPannelComponent } from './hospital-pannel.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';

const hospitalRoutes: Routes = [
  {
    path: '',
    component: HospitalPannelComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'table', component: TableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(hospitalRoutes)],
  exports: [RouterModule],
})
export class HospitalRoutingModule {}
