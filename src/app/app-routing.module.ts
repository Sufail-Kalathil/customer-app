import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes =
  [
    {
      path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: 'app', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '',
      redirectTo: 'auth',
      pathMatch:'full'
    },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
