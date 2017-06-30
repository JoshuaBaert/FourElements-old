import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <div class="foot-div">
    <div class="inner">
      <div class="menu">
        <div class="nav-item" routerLink="">HOME</div>
        <div class="nav-item" routerLink="work">WORK</div>
      </div>
      <div class="content">© 2016 Four Elements Forge. All rights reserved.</div>
    </div>
    
  </div>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
