import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConfigService} from "../../../config/config.service";
import * as http from "http";

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  public submitted = false;

  constructor(public configService: ConfigService) {}

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  public onSubmit() {
    this.submitted = true;
    if (this.loginForm.value.username) {
      this.configService.loginUserRequest(this.loginForm.value.username, this.loginForm.value.password ?? '').subscribe((x) => {
        console.log('user', x)
      })
    }
  }
}
