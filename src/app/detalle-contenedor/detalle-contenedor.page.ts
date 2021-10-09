import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Lampara} from '../models/lampara';
import {LamparaService} from '../services/lampara.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ContenedorService} from '../services/contenedor.service';
import {Lamp} from '../models/lamp';

@Component({
    selector: 'app-detalle-contenedor',
    templateUrl: './detalle-contenedor.page.html',
    styleUrls: ['./detalle-contenedor.page.scss'],
})
export class DetalleContenedorPage implements OnInit {
    public identity;
    public token;
    public lampara: Lampara;
    public lamparas: any;
    public id;
    public lamp:Lamp;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _lamparaService: LamparaService,
        private _contenedorService: ContenedorService) {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    }

    ngOnInit(): void {
        this._route.params.subscribe(params => {
            let id = +params['id'];
            this.lampara = new Lampara(1, '', null, id);
            this.getLamparas(id);
        });

    }
    tabs2(){
        this._router.navigateByUrl('/tabs/tab2');
    }
    getLamparas(id) {
        this._lamparaService.getLampara(id).subscribe(
            response => {
                this.lamparas = response;
            },
            error => {
                console.log(error);
            }
        );

    }
    onSubmit(form) {
        this._lamparaService.create(this.lampara).subscribe(
            response => {
                this.lampara = response.lampara;
                this.ngOnInit();
            },
            error => {
                console.log(error);
            }
        );
    }
    onChange($event) {
        this.lamp = new Lamp($event.target.id,$event.target.checked);
        this._lamparaService.updateEstadoConte($event.target.id,this.lamp).subscribe(
            res =>{

            },error => {
                console.log(<any>error);
            });

    }

}
