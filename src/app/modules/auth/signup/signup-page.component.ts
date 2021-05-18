import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.css'],
    
})
export class SignupPageComponent{

    form: FormGroup;
    public signupInvalid = false;
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
        password: ['', [Validators.required, Validators.minLength(6)]],
        name: ['', Validators.required]
      });
    }

    get password() { return this.form.get('password'); }

  
    ngOnInit(){
      
    }
  
    async onSubmit(): Promise<void> {
      this.signupInvalid = false;
      this.formSubmitAttempt = false;
      if (this.form.valid) {
        try {
          const username = this.form.get('username')?.value;
          const password = this.form.get('password')?.value;
          const name = this.form.get('name')?.value;
          await this.authService.signup(username, password, name);
        } catch (err) {
          this.signupInvalid = true;
        }
      } else {
        this.formSubmitAttempt = true;
      }
    }

    goToLogin(){
      this.router.navigate(["auth/login"])
    }
}