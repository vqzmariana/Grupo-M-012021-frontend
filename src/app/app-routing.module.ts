import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './modules/auth/auth.service';

const routes: Routes = [
    {
      path: 'auth',
      pathMatch: 'prefix',
      loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: 'page',
      pathMatch: 'prefix',
      canActivate: [AuthGuard],
      loadChildren: () =>
      import('./modules/page/page.module').then(m => m.PageModule)
    },
    { path: '**', redirectTo: '/page', pathMatch: 'full' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}