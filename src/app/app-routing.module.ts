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
      path: 'test',
      pathMatch: 'prefix',
      canActivate: [AuthGuard],
      loadChildren: () =>
      import('./modules/test/test.module').then(m => m.TestModule)
    },
    { path: '**', redirectTo: '/test/prueba', pathMatch: 'full' },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}