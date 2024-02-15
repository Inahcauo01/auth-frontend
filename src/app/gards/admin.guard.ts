import {CanActivate, Router} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.IsLoggedIn() && this.authService.IsAdmin()) {
      return true;
    }else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
