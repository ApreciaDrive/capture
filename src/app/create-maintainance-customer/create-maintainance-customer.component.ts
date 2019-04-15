import { isNullOrUndefined, isNull } from 'util';
import { CategoryModel } from './../models/categories.model';
import { Component, OnInit } from '@angular/core';
import { MaintainanceModel } from '../models/maintainance.model';
import { MaintainanceService } from '../service/maintainance.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { ProductsService } from '../service/product.service';
import { ProductModel } from '../models/product.model';
import { CategoryService } from '../service/category.service';
import { ItemModel } from '../models/item.model';
import * as moment from 'moment';

@Component({
  selector: 'app-create-maintainance-customer',
  templateUrl: './create-maintainance-customer.component.html',
  styleUrls: ['./create-maintainance-customer.component.css']
})
export class CreateMaintainanceCustomerComponent implements OnInit {

  customer: MaintainanceModel = {
    entityId: '',
    entityFullName: '',
    product: '',
    productCategory: '',
    item: '',
    quantity: null,
    unitPrice: null,
    value: null,
    renewalDate: new Date,
    startDate: null,
    anniversaryDate: new Date,
  };
  products: ProductModel[] = [];
  categories: CategoryModel[] = [];
  items: ItemModel[] = [];
  formValid: boolean;

  constructor(
    private customerService: MaintainanceService,
    private productService: ProductsService,
    private categoryService: CategoryService,
    public toastr: ToastrManager,
    private route: Router,
  ) { }

  ngOnInit() {
    this.productService.getProducts().then(data => {
      this.products = data;
    });
  }

  productSelected(product: ProductModel) {
    this.productService.getProductById(product.id)
      .then(res => {
        this.categories = res.categories;
      }).catch(err => {
        this.toastr.errorToastr(err.message, 'Error!');
      });
  }

  categorySelected(category: CategoryModel) {
    this.categoryService.getCategoryById(category.id)
      .then(res => {
        this.items = res.items;
      }).catch(err => {
        this.toastr.errorToastr(err.message, 'Error!');
      });
  }

  onSubmit(formData) {
    this.customerService.createMaintainanceCustomer(this.assignCustomer(formData))
      .then((_) => {
        this.route.navigate(['/create-maintainance']);
        this.toastr.successToastr('Created successfully', 'Success!');
      })
      .catch(err => {
        this.toastr.errorToastr(err.message, 'Error!');
      });
  }

  assignCustomer(formData) {
    this.customer.entityId = formData.value.entityId;
    this.customer.entityFullName = formData.value.entityFullName;
    this.customer.product = formData.value.product.name;
    this.customer.productCategory = formData.value.category.name;
    this.customer.item = formData.value.item.name;
    this.customer.quantity = formData.value.quantity;
    this.customer.unitPrice = formData.value.unitPrice;
    this.customer.value = formData.value.value;

    this.customer.startDate = moment(this.customer.startDate).toDate();
    this.customer.anniversaryDate = moment(this.customer.startDate).add(1, 'year').toDate();
    this.customer.renewalDate = moment(this.customer.anniversaryDate).subtract(1, 'month').toDate();

    return this.customer;
  }

  onFormChanged(formData) {
    if (
      formData.value.entityId === undefined ||
      formData.value.entityFullName === undefined ||
      formData.value.quantity === undefined ||
      formData.value.unitPrice === undefined ||
      formData.value.value === undefined
    ) {
      return;
    }

    if (formData.value.entityId.length === 19) {
      if (formData.value.entityFullName.length !== 0) {
        if (!isNullOrUndefined(formData.value.product)) {
          if (!isNullOrUndefined(formData.value.category)) {
            if (!isNullOrUndefined(formData.value.item)) {
              if (formData.value.quantity.length !== 0) {
                if (formData.value.unitPrice.length !== 0) {
                  if (formData.value.value.length) {
                    this.formValid = true;
                    return;
                  } else {
                    this.formValid = false;
                  }
                } else {
                  this.formValid = false;
                }
              } else {
                this.formValid = false;
              }
            } else {
              this.formValid = false;
            }
          } else {
            this.formValid = false;
          }

        } else {
          this.formValid = false;
        }
      } else {
        this.formValid = false;
      }
    } else {
      this.formValid = false;
    }
  }

  clearFields() { }
}
