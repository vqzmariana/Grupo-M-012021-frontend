import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Client } from "../client";
import { EncrDecrService } from "../EncrDecr.service";

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
      private authService: AuthService,
      private EncrDecr: EncrDecrService
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
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        const encrypted = this.EncrDecr.set('secretKeyMuySecreta$#@$^@1ERF', password);
        const name = this.form.get('name')?.value;
        this.authService.signup(username, password, name).subscribe({
          next: (data) => {
            this.authService.saveData(data as Client)
            this.router.navigate(['test/prueba'])
          },
          error: (error) => {
            this.signupInvalid = true
          }
        })
      } else {
        this.formSubmitAttempt = true;
      }
    }

    goToLogin(){
      this.router.navigate(["auth/login"])
    }
}