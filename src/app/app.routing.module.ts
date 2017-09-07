import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductListComponent } from "app/product/product-list.component";

const appRoutes: Routes = [
    { path: 'home', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }