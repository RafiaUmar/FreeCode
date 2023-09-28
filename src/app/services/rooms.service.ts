import {
  APP_SERVICE_CONFIG,
  APP_CONFIG,
} from './../appConfig/appConfig.service';
import { Inject, Injectable } from '@angular/core';
import { room } from '../rooms/rooms.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../appConfig/appConfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
 
  roomsStatus: room[] = [
    // {
    //   roomNumber: 1,
    //   roomType: 'Double',
    //   amentias: 'yes',
    //   price: '5kg',
    //   photos: '../../../../',
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
    // {
    //   roomNumber: 2,

    //   roomType: 'Double',
    //   amentias: 'No',
    //   price: '10kg',
    //   photos: '../..',
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
    // {
    //   roomNumber: 3,

    //   roomType: 'Single',
    //   amentias: 'yes',
    //   price: '5kg',
    //   photos: '../../../../',
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
    // {
    //   roomNumber: 4,

    //   roomType: 'Double',
    //   amentias: 'yes',
    //   price: '5kg',
    //   photos: '../../../../',
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
    // {
    //   roomNumber: 5,

    //   roomType: 'Double',
    //   amentias: 'yes',
    //   price: '5kg',
    //   photos: '../../../../',
    //   checkinTime: new Date(),
    //   checkoutTime: new Date(),
    // },
  ];
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiUrl);
  }

  getRooms() {
    // return this.http.get<room[]>('/api/rooms')
    return this.http.get('/api/rooms');
  }

  addRooms() {
    console.log(this.roomsStatus)
    // this.roomsStatus.values
  }
}
