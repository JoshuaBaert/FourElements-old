import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <div class="nav-div">
      <div class="nav-container">
        <img src="/assets/FEFtranparent.png" alt="Logo" id="logo">
        <a routerLink=""><span>HOME</span></a>
        <a routerLink="work"><span>WORK</span></a>
      </div>
    </div>
    
  `
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
