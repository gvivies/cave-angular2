import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component'

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [LoginComponent]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
