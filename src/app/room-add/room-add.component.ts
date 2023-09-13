import { Component, OnInit } from '@angular/core';
import { room } from '../rooms/rooms.model';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {
  
  successMessage= 'You have entered the right values';
  roomData: room = {
    roomNumber: 0,
    roomType: '',
    amentias: '',
    price: '',
    photos: '',
    checkinTime:  new Date(), 
    checkoutTime: new Date()
  }

  constructor(private roomservice: RoomsService){

  }
  
  ngOnInit() {

  }

  onAdd(roomsForm: NgForm){
    console.log('Done');
    console.log(this.roomData);
    roomsForm.reset();
  };

}
