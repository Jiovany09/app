import {Component, OnInit} from '@angular/core';
import {ContenedorService} from '../services/contenedor.service';
import {UserService} from '../services/user.service';
import { AlertController } from '@ionic/angular';
import {Conte} from '../models/conte';
import {Contenedor} from '../models/contenedor';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']

})
export class Tab2Page {
    public token;
    public identity;
    public contenedores: Contenedor[];
    public conte:Conte;
    textoBuscar = '';
    constructor(private _userService: UserService,
                private _contenedorService: ContenedorService,
                public alertController: AlertController) {
        this.token = this._userService.getToken();
        this.identity = this._userService.getIdentity();

    }

    ngOnInit():void {
        this.getContenedores();
    }
    buscar($event){
        this.textoBuscar = $event.detail.value;

    }
    doRefresh(event) {
        setTimeout(() => {
            this.getContenedores();
            event.target.complete();
        }, 1000);
    }

    getColor(energia_contenida) {
            if(energia_contenida<30){
                return 'red';
            }else if(energia_contenida<=60) {
                return 'yellow';
            }else if (energia_contenida>60) {
                return 'green';
            }
        }

    getContenedores(){
            this._contenedorService.getContenedores().subscribe(
                response => {
                    this.contenedores = response;
                },
                error => {
                    console.log(error);
                });
    }

    onChange($event){
        this.conte = new Conte($event.target.id,$event.target.checked)
        this._contenedorService.updateEstadoConte($event.target.id,this.conte).subscribe(
            response => {

            },error => {
                console.log(<any>error);
            }
        );
    }

}
