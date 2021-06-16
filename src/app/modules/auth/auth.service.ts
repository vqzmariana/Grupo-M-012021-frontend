import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';
import { Client } from "./client";

@Injectable()
export class AuthService {
    
    API_URL = environment.API_URL

    constructor(private http: HttpClient){

    }


    login(username: string, password: string): Observable<Object>{
        const fullpath = this.API_URL + "client/login"
        return this.http.post(fullpath, {},{params: {username, password}})
    }

    signup(email: string, password: string, name: string) : Observable<Object>{
        const fullpath = this.API_URL + "client/register"
        return this.http.post(fullpath, {email, password, name})
    }

    saveData(clientData : Client){
        localStorage.setItem('token', clientData.token)
        localStorage.setItem('apikey', clientData.apikey)
        localStorage.setItem('name', clientData.name)
        localStorage.setItem('email', clientData.email)
    }

    public getUserToken(): string {
        return localStorage.getItem('token')
    }
}