import { Component, Inject, OnInit } from '@angular/core';
import { LocalStorageToken } from './localstorage.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'freeCode';

  constructor(@Inject(LocalStorageToken) private storage: Storage) {

  }

  ngOnInit() {
    this.storage.setItem ('name', 'Hilton Hotel RAFIA WORKING VERY WELL')
  }
}
