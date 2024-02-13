import {Component, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

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

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {}


  onLogin(){
    this.http.post('http://localhost:8081/api/v1/auth/login', this.loginObj).subscribe((res: any) => {
      console.log("res : "+res);
      if (res.token) {
        alert('Login Success');
        this.toastr.success('Login Success');
        localStorage.setItem('accessToken', res.token);
        // this.router.navigate(['/dashboard']);
      } else {
        alert('Login Failed');
      }
    }, error => {
      console.error(error);
      alert('Login Failed: ' + error.message);
    });
  }
}
