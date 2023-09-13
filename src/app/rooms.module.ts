import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { FormsModule } from '@angular/forms';
import { RoomsRoutingModule } from './rooms/rooms-routing.module';
import { HeaderModule } from './header/header/header.module';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomListComponent,
    RoomsBookingComponent,
    RoomAddComponent



  ],
  imports: [
    CommonModule,
    FormsModule,
    RoomsRoutingModule,
    HeaderModule

  ]
})
export class RoomsModule { }
