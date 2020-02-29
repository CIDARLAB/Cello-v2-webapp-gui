import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'spec', loadChildren: () => import('./spec/spec.module').then(m => m.SpecPageModule), canActivate: [AuthGuard] },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
    { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsPageModule), canActivate: [AuthGuard] },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule) },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
