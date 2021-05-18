import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


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
    AppRoutingModule,
    NoopAnimationsModule
  ],
  declarations:[
    AppComponent
  ],
  providers: [
     { provide: LOCALE_ID, useValue: 'en-US' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
