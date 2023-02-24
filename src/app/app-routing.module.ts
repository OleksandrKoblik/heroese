import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {AuthModelComponent} from "./pages/auth-model/auth-model.component";
import {MainModelComponent} from "./pages/main-model/main-model.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule)
      }
    ],
    component: AuthModelComponent
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'detail-hero/:id',
        loadChildren: () => import('./pages/detail-hero/detail-hero.module').then(m => m.DetailHeroModule)
      },
      {
        path: 'battle',
        loadChildren: () => import('./pages/battle/battle.module').then(m => m.BattleModule)
      }
    ],
    component: MainModelComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
