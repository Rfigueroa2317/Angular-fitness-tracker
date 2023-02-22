import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanLoad, Route } from "@angular/router";
import { AuthService } from "./auth.service";
import * as fromRoot from '../app.reducer';

import { Store } from "@ngrx/store";
import { take } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private store: Store<fromRoot.State>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1));
  }
}
