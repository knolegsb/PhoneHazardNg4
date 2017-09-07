import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "app/services/product.service";
import { Category, CategoryService } from "app/services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product.css']
})

export class ProductListComponent implements OnInit {

    products: Product[];
    categories: Category[];

    private selectedId: number;

    constructor (private productService: ProductService, private categoryService: CategoryService,
                private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.fetchCategories();
        this.fetchProducts();
    }

    fetchProducts() {
        this.productService.getProducts().subscribe(result => {
            this.products = result;
        },
        error => this.handleError(error));
    }
    
    fetchCategories() {
        this.categoryService.getCategories().subscribe(result => {
            this.categories = result;
        },
        error => this.handleError(error));
    }

    onProductSelect(product: Product) {
        this.router.navigate(['/products', product.id]);
    }

    onCategorySelect(category: Category) {
        this.productService.getProductsByCategoryId(category.id)
            .subscribe(result => this.products = result);
    }

    handleError(err: any){
        console.log('The error is ' + err);
    }
}