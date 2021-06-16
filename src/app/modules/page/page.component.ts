import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private API_URL = environment.API_URL
  apikey = localStorage.getItem("apikey")
  name = localStorage.getItem("name")
  email = localStorage.getItem("email")
  hide = true

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const fullpath = this.API_URL + "client/test"
    this.http.get(fullpath, {headers: new HttpHeaders().set('Authorization', token), responseType: 'text'}).subscribe({
      next: data => {
        
      },
      error: error => {
        
      }
    })
  }

}
