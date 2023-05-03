import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  badgevisible = false;
  badgevisibility() {
    this.badgevisible = true;
  }

  role:['user','admin','hospital'];
  
}
