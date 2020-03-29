import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from './project.service';

@Injectable({
    providedIn: 'root'
})
export class ResultsGuard implements CanActivate {

    constructor(
        private project: ProjectService,
        private router: Router,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
        if (this.project.project.results.length === 0) {
            this.router.navigateByUrl("project");
            return false;
        }
        return true;
    }

}
