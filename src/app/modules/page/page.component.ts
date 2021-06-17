import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Metrics } from './metrics';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private API_URL = environment.API_URL
  apikey : string = localStorage.getItem("apikey")
  name : string = localStorage.getItem("name")
  email : string = localStorage.getItem("email")
  hide : boolean = true
  metrics : Metrics = new Metrics()

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const fullpath = this.API_URL + "client/metrics"
    this.http.get(fullpath, {headers: new HttpHeaders().set('Authorization', token)}).subscribe({
      next: data => {
        this.metrics = data as Metrics
      },
      error: error => {
        console.log(error)
      }
    })
  }

}
