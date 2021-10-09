import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  public user: User;
  public status: string;
  constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
  ) {
      this.user = new User(1, '', '', '', '', 'empleado','','',null);

  }

  ngOnInit():void {

  }
  onSubmit(form){
    this._userService.register(this.user).subscribe(
        response => {
           if (response.data.status == 'success'){
               this._router.navigateByUrl('login');
               form.reset();
           }else{
               console.log('tas mal'+ response);
           }

        },
        error => {
          console.log(<any>error);
        }
    );
  }




}
