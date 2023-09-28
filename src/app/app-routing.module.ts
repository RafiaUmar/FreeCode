import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { BookingGuard } from './booking.guard';

const routes: Routes = [
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookingComponent ,  canDeactivate: [BookingGuard] },
  { path: '', redirectTo: '/login',pathMatch: 'full' },
  { path: 'container', component: ContainerComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
