import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {AlertController} from '@ionic/angular';
import {error} from '@angular/compiler/src/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conf-usuario',
  templateUrl: './conf-usuario.page.html',
  styleUrls: ['./conf-usuario.page.scss'],
})
export class ConfUsuarioPage implements OnInit {
 darkMode: boolean = false;
  public user:User;
  public token;
  public identity;
  public users:any;
  constructor( private _route: ActivatedRoute,
               private _router: Router,
               private _userService: UserService,
               public alertController: AlertController) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }

  ngOnInit() {
  }
   // change() {
   //   this.darkMode = !this.darkMode;
   //   document.body.classList.toggle('dark');
   // }
  tabs2(){
    this._router.navigateByUrl('/tabs/tab1');
  }

  deleteAccount() {
    Swal.fire({
      title: 'Quieres borrar tu cuenta?',
      text: "Todos tus datos seran eliminados",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#1eb5c6',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Borrar cuenta',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._userService.deleteAccount(this.identity.sub, this.token).subscribe(
            response => {
              console.log(response);
              localStorage.removeItem('identity');
              localStorage.removeItem('token');
              localStorage.clear();
              this._router.navigateByUrl('/login')
              Swal.fire(
                  'Cuenta borrada',
                  'La cuenta ha sido borrada exitosamente.',
                  'error'
              )
            }
        ), error => {
          console.log(<any> error);
        }

      }
    });
  }

}
