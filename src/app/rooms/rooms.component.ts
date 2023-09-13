import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  Self,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { RoomsLists, room } from './rooms.model';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  providers: [RoomsService],
})
export class RoomsComponent implements OnInit, OnChanges, AfterViewInit {
  constructor(@Self() private service: RoomsService) {}
  @ViewChild(HeaderComponent)
  header!: HeaderComponent;
  title = 'Rafia';
  hiddenrooms = false;
  numberOfRooms = 5;
  role = 'Admins';

  roomsData: RoomsLists = {
    availableRooms: 80,
    bookedRooms: 15,
    totalRooms: 35,
  };

  roomsStatus: room[] = [
    {
      roomNumber: 1,
      roomType: 'Double',
      amentias: 'yes',
      price: '5kg',
      photos: '../../../../',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 2,

      roomType: 'Double',
      amentias: 'No',
      price: '10kg',
      photos: '../..',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 3,

      roomType: 'Single',
      amentias: 'yes',
      price: '5kg',
      photos: '../../../../',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 4,

      roomType: 'Double',
      amentias: 'yes',
      price: '5kg',
      photos: '../../../../',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
    {
      roomNumber: 5,

      roomType: 'Double',
      amentias: 'yes',
      price: '5kg',
      photos: '../../../../',
      checkinTime: new Date(),
      checkoutTime: new Date(),
    },
  ];

  onClick() {
    this.hiddenrooms = !this.hiddenrooms;
    console.log(this.title, 'Done');
  }

  ngOnInit(): void {
    console.log(this.header);
    // this.service.getRooms().subscribe(rom => {
    //   this.roomsStatus = rom
    // });
  }

  roomChosen(pro: room) {
    console.log(pro);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit() {
    console.log(this.header);
    this.header.title = 'RAFIA GETTING BORED';
  }
}
