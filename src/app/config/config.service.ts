import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private REST_API_SERVER = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  public getUsersRequest(){
    return this.http.get(this.REST_API_SERVER+"/users/");
  }

  public loginUserRequest(user_email: string, user_psw: string) {
    const body = new HttpParams()
      .set('username', user_email)
      .set('password', user_psw);

    return this.http.post(this.REST_API_SERVER+'/login', body)
  }
}
