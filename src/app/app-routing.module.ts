import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const URL_MFE_CARTOES = 'http://localhost:4201';
const URL_MFE_CARRINHO = 'http://localhost:4202';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cartoes',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: 'cartoes',
    pathMatch: 'full',
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${URL_MFE_CARTOES}/remoteEntry.js`,
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule ?? m.AppModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${URL_MFE_CARRINHO}/remoteEntry.js`,
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule ?? m.AppModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
