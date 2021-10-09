import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {

    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalle-contenedor/:id',
    loadChildren: () => import('./detalle-contenedor/detalle-contenedor.module').then( m => m.DetalleContenedorPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'agregar-contenedor',
    loadChildren: () => import('./agregar-contenedor/agregar-contenedor.module').then( m => m.AgregarContenedorPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout/:sure',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'info-usuario',
    loadChildren: () => import('./info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'conf-usuario',
    loadChildren: () => import('./conf-usuario/conf-usuario.module').then( m => m.ConfUsuarioPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'agregar-lampara',
    loadChildren: () => import('./agregar-lampara/agregar-lampara.module').then( m => m.AgregarLamparaPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'modal-lampara',
    loadChildren: () => import('./modal-lampara/modal-lampara.module').then( m => m.ModalLamparaPageModule),canActivate: [AuthGuardService]
  },
  {
    path: 'error404',
    loadChildren: () => import('./error404/error404.module').then( m => m.Error404PageModule)
  },
  {
    path: '**',
    redirectTo: '/error404',
    pathMatch: 'full'
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
