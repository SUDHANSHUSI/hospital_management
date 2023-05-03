import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  role:string=''

  constructor(private router: Router, private renderer: Renderer2) {}
  title = 'hospital_management';

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.renderer.setProperty(document.body, 'scrollTop', 0);
    });

   this.role=localStorage.getItem('role');
  //  console.log(this.role);
  }

}
