import {Component, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "username": "",
    "password": ""
  }

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}


  onLogin(){
    // validate the username and password
    if (!this.loginObj.username) {
      this.toastr.warning('Username is required');
      return;
    }
    if (!this.loginObj.password) {
      this.toastr.warning('Password is required');
      return;
    }

    // call the login service
    this.authService.Login(this.loginObj).subscribe((res: any) => {
      console.log("res : "+res);
      if (res.token) {
        this.toastr.success('Login Success');
        localStorage.setItem('accessToken', res.token);
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Login Failed');
      }
    }, error => {
      this.toastr.error('Error while login');
    });
  }

}
