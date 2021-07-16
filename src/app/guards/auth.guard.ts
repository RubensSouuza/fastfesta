import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(user => {
        if (!user) { this.router.navigate(['login']); }

        resolve(user ? true : false);
      });
    });
  }

}
