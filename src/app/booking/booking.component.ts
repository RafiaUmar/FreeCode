import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  
  get location(){
    return this.bookingForm.get('location')as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: ['', [Validators.required]],
      guestEmail: ['', [Validators.required, Validators.email]],
      checkinDate: ['', [Validators.required]],
      checkoutDate: ['', [Validators.required]],
      bookingStatus: ['', [Validators.required]],
      bookingAmount: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      location: this.fb.group({
        guestCountry: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      }),
    });
  }

  guestAdd() {
    this.location.push(
      this.fb.group({
        guestCountry: ['', [Validators.required]],
        zipCode: ['', [Validators.required]],
      })
  )
  }

  addBooking() {
    console.log(this.bookingForm.value);
  }
}
