import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    //tipo: any;
    public title: string;
    public user: User;
    public token;
    public identity;
    public status: string;
    public data: any;
//EdicionAntesDeAgregarlaAFirebase
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _userService: UserService) {
        this.user = new User(1, '', '', '', '', 'empleado', '', '','');
    }

    ngOnInit(): void {
        this.logout();

    }

    onSubmit(form) {
        this._userService.signup(this.user).subscribe(
            response => {
                    this.data = response;
                    // Token
                    localStorage.setItem('token', this.data.token);
                    this._userService.signup(this.user, true).subscribe(
                        response => {
                            this.identity = response;
                            // Objeto usuario identificado
                            localStorage.setItem('identity', JSON.stringify(this.data.user));
                            // Redirección
                            this._router.navigateByUrl('/tabs/inicio');
                            form.reset();
                        },
                        error => {
                            console.log(<any> error);
                        }
                    );

            },
            error => {
                console.log(<any> error);
            }
        );
    }


    logout() {
        this._route.params.subscribe(params => {

            let logout = +params['sure'];

            if (logout == 1) {
                localStorage.removeItem('identity');
                localStorage.removeItem('token');
                this.identity = '';
                this.token = '';
                this._router.navigate(['/login']);
            }

        });
    }
}
