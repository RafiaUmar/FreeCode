import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {
  

id: number = 0;

  constructor(private router: ActivatedRoute){
    

  }


  ngOnInit() {
    this.router.params.subscribe((params) =>{
      console.log(this.id = params['id']) 
    })
  }

}
