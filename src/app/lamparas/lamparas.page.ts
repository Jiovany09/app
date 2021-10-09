import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {LamparaService} from '../services/lampara.service';
import {ContenedorService} from '../services/contenedor.service';
import {Lamp} from '../models/lamp';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {LoadingController} from '@ionic/angular';


@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.page.html',
  styleUrls: ['./lamparas.page.scss'],
})
export class LamparasPage implements OnInit  {
  public token;
  public identity;
  public lamp: Lamp;
  public lamparas:any;
  textoBuscar = '';


  constructor(private _userService: UserService,
              private _lamparaService : LamparaService,
              private _contenedorService:ContenedorService)
  {
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();

  }

  ngOnInit() {
    this.getLamparas();
  }
  buscar($event){
    this.textoBuscar = $event.detail.value;
  }
  doRefresh(event) {
    setTimeout(() => {
      this.getLamparas();
      event.target.complete();
    }, 1000);
  }
  getLamparas(){
    this._lamparaService.getLamparas().subscribe(
        response => {
          this.lamparas = response;
        }
    );
  }
  onChange($event) {

      this.lamp = new Lamp($event.target.id, $event.target.checked);
      this._lamparaService.updateEstadoConte($event.target.id,this.lamp).subscribe(
          res =>{

          },error => {
            console.log(<any>error);
          });

    }

}
