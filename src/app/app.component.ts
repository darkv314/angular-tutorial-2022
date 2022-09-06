import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.productService.getAllProducts()
    .subscribe(res => {
      console.log('Response: ', res)
    })

    this.productService.createProduct({
      description: 'soy la descripcion',
      imageUrl: 'soy la imagen',
      ownerId: 1,
      price: 20,
      title: 'Polera',
    }).subscribe(res => {
      console.log('Response post: ', typeof(res))
    })

    this.productService.deleteProduct('p2')
    .subscribe(res => {
      console.log('Response delete: ', res)
    })

    this.productService.updateProduct('p9', {
      description: 'Modificado',
      imageUrl: 'modificado',
      ownerId: 100000,
      price: 100000,
      title: 'modificado'
    }).subscribe(res => {
      console.log('Response update: ', res)
    })

  }

}
