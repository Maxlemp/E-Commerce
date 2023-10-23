import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatestWith } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-market-admin',
  templateUrl: './market-admin.component.html',
  styleUrls: ['./market-admin.component.scss'],
})
export class MarketAdminComponent implements OnInit {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  carts: any[] = [];
  id:any
  amount: number = 0;
  products: any[] = [];
  form!: FormGroup;
  categories: string[] = [];
  loading: boolean = false;
  base64: any;


  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    this.getAllProducts();
    // /*u gotta remove this line later bsh tkhdmlk l categories w yetnahalk error l target*/ this.getImagePath(event)
    this.getCategories();
  }
  constructor(
    private productService: ProductsService,
    private build: FormBuilder,
    private route:ActivatedRoute,
  ) {
    this.id= this.route.snapshot.paramMap.get("id")
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res;
    });
  }
  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
  getCategories() {
    this.productService.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (error) => {
        alert('error');
      }
    );
  }
  getSelectedCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
    console.log(this.form);
  }
  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue('aaaaaaaaaaaaaaaaaaa');
    };
  }
  addProduct() {
    const model = this.form.value;
    this.productService.createProduct(model).subscribe((res) => {
      alert('Product Added Successfully');
    });
    console.log(this.form);
  }
  update(item:any){
    // this.form.get('title')?.setValue(item.title);
    // this.form.get('description')?.setValue(item.description);
    // this.form.get('price')?.setValue(item.price);
    // this.form.get('category')?.setValue(item.category);
    // this.form.get('image')?.setValue(item.image);
    this.base64 = item.image;
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
    })
    let model= JSON.stringify(this.form.value);
    this.id = item.id
    this.productService.updateProduct(model,this.id).subscribe((res:any) => {
      this.data = res;
    });
  }
}


