import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private REST_API_SERVER = "http://localhost:8000";

  constructor(private http: HttpClient) {}

  public getUsersRequest(){
    return this.http.get(this.REST_API_SERVER+"/users/");
  }

  public getUserByEmailRequest(user_email: string, user_psw: string) {
    return this.http.get(this.REST_API_SERVER+'/user/'+user_email+user_psw)
  }
}
