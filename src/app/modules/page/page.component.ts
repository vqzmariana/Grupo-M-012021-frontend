import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Metrics } from './metrics';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private API_URL = environment.API_URL
  public formInvalid : boolean = false;
  public formSubmit = false;
  public form: FormGroup;
  apikey : string = localStorage.getItem("apikey")
  name : string = localStorage.getItem("name")
  email : string = localStorage.getItem("email")
  hide : boolean = true
  metrics : Metrics = new Metrics()
  showSpinner : boolean = false

  constructor(private http: HttpClient, private fb: FormBuilder) { 
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = this.fb.group({
      title: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern(reg)]]
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const fullpath = this.API_URL + `client/metrics?email=${this.email}`
    this.http.get(fullpath, {headers: new HttpHeaders().set('Authorization', token)}).subscribe({
      next: data => {
        this.metrics = data as Metrics
      },
      error: error => {
        console.log(error)
      }
    })
  }

  subscribe(){
    this.formInvalid = false;
    this.formSubmit = false;
    if (this.form.valid) {
      
      this.showSpinner = true
      const fullpath = this.API_URL + 'client/subscribe'
      const titleId = this.form.get('title')?.value;
      const url = this.form.get('url')?.value;
      const token = localStorage.getItem('token')
      this.http.post(fullpath, {email: this.email, titleId, url}, {headers: new HttpHeaders().set('Authorization', token)}).subscribe({
        next: data => {
          this.showSpinner = false
          this.formSubmit = true
        },
        error: error => {
          this.showSpinner = false
          this.formInvalid = true
          console.log(error)
        }
      })
    }
  }

}
