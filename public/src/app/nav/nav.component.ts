import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  template: `
    <div class="nav-div"><!--TODO gradient class?? -->
      <div class="nav-top">
        <img src="/assets/FEFtranparent.png" alt="Logo" id="logo">
        <div class="nav-items">
          <div class="nav-item" routerLink="">HOME</div>
          <div class="nav-item" routerLink="work">WORK</div>
        </div>
      </div>
      <div class="nav-bottom">
        
      </div>
    </div>
    
    
  `
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
