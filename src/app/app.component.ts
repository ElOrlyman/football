import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    sessionStorage.setItem('token', '39535a8fdb7941c9b85bf88a149cd23f');
  }
}
