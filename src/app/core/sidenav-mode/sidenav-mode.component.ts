import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map,  } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-mode',
  templateUrl: './sidenav-mode.component.html',
  styleUrls: ['./sidenav-mode.component.scss']
})
export class SidenavModeComponent implements OnInit {

  mode = new FormControl('over');

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  closeIfHandset(sidenav, event) {

    console.log(event.target, 'event target');

    /**
     * if small close the drawer so that they can see the content
     */
    this.isHandset$.subscribe(res => {
      if (res.valueOf() === true) {
        sidenav.toggle();
      }
    });
  }

  ngOnInit() {
  }

}
