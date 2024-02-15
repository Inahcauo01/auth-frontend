import {Component, signal} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }


  isAdminUser: boolean = false;

  checkIfAdmin(): void {
    this.isAdminUser = this.authService.IsAdmin();
    console.log(this.isAdminUser);
  }

  logout() {
    this.authService.logout().subscribe(() => {

      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
      this.toastr.success('Logout successful');

    }, (error) => {
      console.error('Error during logout:', error);
      this.toastr.error('Error during logout: ', error.message);
    });
  }

}
