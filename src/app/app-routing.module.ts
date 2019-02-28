import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'projects', loadChildren: './projects/projects.module#ProjectsPageModule', canActivate: [AuthGuard] },
    { path: 'verilog', loadChildren: './verilog/verilog.module#VerilogPageModule' },
    { path: 'library', loadChildren: './library/library.module#LibraryPageModule' },
    { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
