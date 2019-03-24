import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sidenav-mode',
  templateUrl: './sidenav-mode.component.html',
  styleUrls: ['./sidenav-mode.component.scss']
})
export class SidenavModeComponent implements OnInit {
  mode = new FormControl('over');

  constructor() { }

  ngOnInit() {
  }

}
