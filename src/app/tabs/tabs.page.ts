import { Component, OnInit,DoCheck } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements DoCheck,OnInit{

  public identity;
  public token;

  users:any;
  constructor(
      private _userService: UserService,
      private _route: ActivatedRoute,
      private _router: Router,) {
      this.identity = this._userService.getIdentity();
      this.token = this._userService.getToken();

  }

  ngOnInit():void{
    // this.clearToken();
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
//   clearToken(){
//     if (this.token){
//       setInterval(()=>{
//         localStorage.clear();
//         this._router.navigateByUrl('login')
//       },3600000);
//     }
// //3600000 1Hr
// //30000 30s
//   }

}
