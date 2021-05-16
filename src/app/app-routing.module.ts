import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'auth',
      pathMatch: 'prefix',
      loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    { path: '**', redirectTo: '/auth/login', pathMatch: 'full' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}