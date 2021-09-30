import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenStorageServiceService } from 'src/app/service/token-storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  readRole!: string;

  constructor(
    private tokenStorage: TokenStorageServiceService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const expectedRole = route.data.expectedRole;
    const roles = JSON.parse(sessionStorage.getItem('AuthAuthorities') || '[]');
    this.readRole = 'user';
    roles.forEach((rol: any) => {
      if (rol === 'ROLE_ADMIN') {
        this.readRole = 'admin';
      }
    });
    console.log(expectedRole);
    console.log(roles);
    if (
      !this.tokenStorage.getToken() ||
      expectedRole.indexOf(this.readRole) === -1
    ) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
