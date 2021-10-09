import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { global } from './global';
import {Lampara} from '../models/lampara';
import {Lamp} from '../models/lamp';
@Injectable({
  providedIn: 'root'
})
export class LamparaService {
  public url : string;
  public identity;
  public token;

  constructor(public _http: HttpClient) {
    this.url = global.url;
  }

  getLamparas():Observable<any>{
    return this._http.get(this.url + 'listLamparas');
  }

  getLampara(id):Observable<any>{
    return this._http.get(this.url + 'listByContainer/'+id);
  }

  create(lampara:Lampara):Observable<any>{
    return this._http.post(this.url + 'createLampara', lampara );

  }

  updateEstadoConte(id,estado): Observable<any>{


    return this._http.get(this.url + 'activarDesactivarLamparas/' + id, estado);
    // METODO POST = PUT EN HEROKO

  }
}
