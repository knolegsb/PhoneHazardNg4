import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from "app/services/category.service";
import { ProductService } from "app/services/product.service";
import { ProductRoutingModule } from "app/product/product.routing.module";
import { ProductListComponent } from "app/product/product-list.component";
import { ProductEditorComponent } from "app/product/product-editor.component";

@NgModule({
    imports:[ CommonModule, FormsModule, ProductRoutingModule],
    declarations: [ProductListComponent, ProductEditorComponent],
    providers: [ProductService, CategoryService]
})
export class ProductModule { }