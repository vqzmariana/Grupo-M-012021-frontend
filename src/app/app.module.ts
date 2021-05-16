import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

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
    BrowserModule,
    AppRoutingModule
  ],
  declarations:[
    AppComponent
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
