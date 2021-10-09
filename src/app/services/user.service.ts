import { Injectable, OnInit  } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {global} from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  public url:string;
  public identity;
  public token;

  constructor(public _http: HttpClient) {
    this.url = global.url;
  }
  ngOnInit():void {

  }
  register(user): Observable<any>{
    //let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url+'register', user);
  }


  update(id,user): Observable<any>{

    // let headers = new HttpHeaders().append('Authorization', token);
    return this._http.put(this.url + 'editCitizen/' + id, user);

    //PARA HEROKU PONER EN METODO POST Y COMENTAR LOS HEADER DEL TOKEN
  }

  deleteAccount(id,token){
    // let headers = new HttpHeaders().append('Authorization', token);
    return this._http.delete(this.url + 'delete/' + id);
  }

  signup(user, gettoken = null): Observable<any>{
    if(gettoken != null){
      user.gettoken = 'true';
    }
    return this._http.post(this.url+'login', user);
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != "undefined"){
      this.identity = identity;
    }else{
      this.identity = null;
    }
      return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != "undefined"){
      this.token = token;
    }else{
      this.token = null;
    }

    return this.token;
  }
}
