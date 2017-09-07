import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "app/services/product.service";
import { Category, CategoryService } from "app/services/category.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ToasterService } from "angular2-toaster/angular2-toaster";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
    // moduleId: module.id,
    // selector: 'product-editor',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product.css']
})

export class ProductEditorComponent {
    product: Product;
    categories: Category[];
    isEditModeEnabled: boolean = false;
    
    constructor(private productService: ProductService, 
                private categoryService: CategoryService, 
                private route: ActivatedRoute, 
                private router: Router, 
                private toasterService: ToasterService) { }   

    ngOnInit() {
        this.setupProduct();
        this.setupCategories();
    }

    setupProduct(): void {
        // (+) converts string 'id' to a number

        this.route.params.subscribe((params: Params) => {
            
            if (!isNaN(params['id'])) {
                this.productService.getProduct(+params['id'])
                    .subscribe((product: Product) => this.product = product);
            } else {
                this.product = new Product();
                this.isEditModeEnabled = true;
            }
        });
    }

    isNewObject(): boolean {
        return this.product.id === undefined;
    }

    saveProduct(product: Product) {
        this.productService.saveProduct(product).subscribe((result) => {
            this.isEditModeEnabled = false;
            this.toasterService.popAsync('success', 'Saved Successfully!');
        });
    }

    setupCategories() : void {
        this.categoryService.getCategories()
            .subscribe((categories: Category[]) => this.categories = categories);
    }

    deleteProduct(productId: number) {
        this.productService.deleteProduct(productId).subscribe(() => {
            this.isEditModeEnabled = false;
            this.toasterService.popAsync('success', 'Product has been deleted successfully!');

            this.router.navigate(['/products']);
        });
    }
}