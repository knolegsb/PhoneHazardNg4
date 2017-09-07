import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "app/product/product-list.component";
import { ProductEditorComponent } from "app/product/product-editor.component";

const productRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductEditorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})

export class ProductRoutingModule { }