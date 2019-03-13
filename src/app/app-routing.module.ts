import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'spec', loadChildren: './spec/spec.module#SpecPageModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule', canActivate: [AuthGuard] },
    { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
