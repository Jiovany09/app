import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LamparasPage } from './lamparas.page';
import {PipesModule} from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: LamparasPage
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      PipesModule],
  exports: [RouterModule],
})
export class LamparasPageRoutingModule {}
