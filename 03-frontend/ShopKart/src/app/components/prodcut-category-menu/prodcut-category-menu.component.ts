import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-prodcut-category-menu',
  templateUrl: './prodcut-category-menu.component.html',
  styleUrls: ['./prodcut-category-menu.component.css']
})
export class ProdcutCategoryMenuComponent {

  productCategories : ProductCategory[] = [];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.listProductCategories();
  }
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories = '+ JSON.stringify(data));
        this.productCategories = data;
      }
    );
  }

}
