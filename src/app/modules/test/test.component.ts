import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  API_URL = environment.API_URL

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    const fullpath = this.API_URL + "client/test"
    this.http.get(fullpath, {headers: new HttpHeaders().set('Authorization', token), responseType: 'text'}).subscribe({
      next: data => {
        console.log((data as any))
        console.log("anda")
      },
      error: error => {
        console.log(error)
        console.log("no anda")
      }
    })
  }

}
