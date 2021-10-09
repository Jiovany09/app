import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { global } from './global';
import {Contenedor} from '../models/contenedor';




@Injectable({
  providedIn: 'root'
})
export class ContenedorService {
  public url : string;
  public identity;
  public token;
  public estado :Contenedor;

  constructor(public _http: HttpClient) {
    this.url = global.url;
  }
  getContenedores():Observable<any>{

    return this._http.get(this.url + 'listContenedores');

  }

  updateEstadoConte(id,estado): Observable<any>{
    return this._http.get(this.url + 'activarDesactivarContenedores/' + id, estado);
    // METODO POST = PUT EN HEROKO


  }

 }
