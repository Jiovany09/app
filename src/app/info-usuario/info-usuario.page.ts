import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {AlertController} from '@ionic/angular';
import Swal from 'sweetalert2'
AlertController
@Component({
    selector: 'app-info-usuario',
    templateUrl: './info-usuario.page.html',
    styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {
    public user: User;
    public token;
    public status_user;
    public identity;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private alertCtrl:AlertController
    ) {
        this.token = this._userService.getToken();
        this.identity = JSON.parse(localStorage.getItem('identity'));
        this.user = this.identity;
    }

    ngOnInit(): void {

    }
    // async showAlert() {
    //     const alert = await this.alertCtrl.create({
    //         message: 'Usurio Editado',
    //     });
    //     alert.present();
    //     setTimeout(()=>{
    //         alert.dismiss();
    //     }, 2000);
    // }

    onSubmit(form) {
        this._userService.update(this.identity.sub, this.user).subscribe(
            response => {
                if (response.data.status == 'success'){
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Usuario ' + this.identity.nombre+' editado correctamente'
                    })
                    // Redirect
                    localStorage.setItem('identity', JSON.stringify(this.identity));
                    this._router.navigate(['/conf-usuario']);
                }else {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'error',
                        title: 'Usuario ' + this.identity.nombre+' no editado correctamente'
                    })
                }

            },
            error => {
                console.log(<any> error);
            }
        );

    }
}
