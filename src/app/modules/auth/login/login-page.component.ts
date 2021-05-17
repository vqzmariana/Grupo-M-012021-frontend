import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
    
})
export class LoginPageComponent{
    form: FormGroup;
    public loginInvalid = false;
    private formSubmitAttempt = false;
    private returnUrl: string;
  
    constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService
    ) {
  
      this.form = this.fb.group({
        username: ['', Validators.email],
        password: ['', Validators.required]
      });
    }
  
    ngOnInit(){
      
    }
  
    async onSubmit(): Promise<void> {
      this.loginInvalid = false;
      this.formSubmitAttempt = false;
      if (this.form.valid) {
        try {
          const username = this.form.get('username')?.value;
          const password = this.form.get('password')?.value;
          await this.authService.login(username, password);
        } catch (err) {
          this.loginInvalid = true;
        }
      } else {
        this.formSubmitAttempt = true;
      }
    }
}