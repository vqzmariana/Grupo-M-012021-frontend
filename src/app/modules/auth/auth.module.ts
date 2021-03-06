import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./auth.service";
import { SignupPageComponent } from "./signup/signup-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { UiModule } from "../ui/ui.module";
import { MaterialModule } from "../ui/material.module";
import { EncrDecrService } from "./EncrDecr.service";


export const authRoutes: Routes = [
  {
    path:      'login',
    component: LoginPageComponent
  },
  {
    path:      'signup',
    component: SignupPageComponent
  },
  
];

@NgModule({
    declarations: [LoginPageComponent, SignupPageComponent],
    entryComponents: [],
    exports: [LoginPageComponent, SignupPageComponent],
    imports: [RouterModule.forChild(authRoutes), HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule, UiModule, MaterialModule],
    providers: [AuthService, EncrDecrService]
  })
  export class AuthModule {}