import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { global } from './global';
@Injectable({
  providedIn: 'root'
})
export class GeneradoresService {

  public url:string;
  constructor(private _http:HttpClient) {
    this.url = global.url;
  }


  getDetallesGenerador():Observable<any>{
    return this._http.get(this.url + 'graficaGeneracionEnergia/dia');
  }

  getDetallesContenedor():Observable<any>{
    return this._http.get(this.url + 'graficaConsumoEnergia/dia');
  }
}
