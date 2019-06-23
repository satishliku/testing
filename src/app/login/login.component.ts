import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="in28minutes"
  password=""
  
  errorMessage="Invalid Login Credential"
  invalid=false
  constructor(private routers:Router) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.username==="in28minutes" && this.password==="dummy"){
      this.invalid=false;
      //routing to welcome page
      this.routers.navigate(['welcome',this.username]);
    }else{
      this.invalid=true;
    }
    
    
  }
}
