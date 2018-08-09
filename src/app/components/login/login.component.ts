import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  post_user: User = new User();
  users: any;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
  	this._loginService.getUsers().subscribe(data=>{
  		this.users = data;
  		console.log(data);
  	})
  }

  loginUser(){
  	console.log(this.post_user);
  	this._loginService.loginUser(this.post_user).subscribe(data=>{
  		this.post_user = new User();
  	})
  }

}

export class User {
	username: any;
	password: any;
}