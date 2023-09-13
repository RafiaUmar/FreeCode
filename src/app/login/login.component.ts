import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';


  login(){
    if(this.email === "admin@gmail.com" && this.password=== "12345"){
      alert("Login Successfully")
      this.router.navigate(['/rooms'])
    }
  }

  constructor(private router: Router) {}
  ngOnInit() {}
}
