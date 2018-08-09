import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const postHttpOptions = {
  headers: new HttpHeaders({
  	'Content-Type': 'application/json',
  	// 'responseType': 'text'
  })
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(user){
    let url = "http://127.0.0.1/doc/signup.php/";
    return this.http.post(url, user, postHttpOptions) 
  }

  getUsers(){
    let url = "http://127.0.0.1/doc/request.php";
	return this.http.get(url, httpOptions);	
  }
}
