import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {SessionClient} from "./SessionClient";



@Injectable({
  providedIn: 'root'
})
export class Authorizated implements CanActivate {
  constructor(private router: Router, private sessionClient: SessionClient) { }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.sessionClient.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
