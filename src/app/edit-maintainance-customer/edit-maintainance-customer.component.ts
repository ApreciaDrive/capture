import { MaintainanceModel } from './../models/maintainance.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { isNullOrUndefined } from 'util';
import { MaintainanceService } from '../service/maintainance.service';
import { ProductsService } from '../service/product.service';
import { ProductModel } from '../models/product.model';
import { CategoryModel } from '../models/categories.model';
import { CategoryService } from '../service/category.service';
import { ItemModel } from '../models/item.model';

@Component({
  selector: 'app-edit-maintainance-customer',
  templateUrl: './edit-maintainance-customer.component.html',
  styleUrls: ['./edit-maintainance-customer.component.css']
})
export class EditMaintainanceCustomerComponent implements OnInit {
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
    private route: Router,
    private activeroute: ActivatedRoute,
    private toastr: ToastrManager, ) { }

  ngOnInit() {
    this.productService.getProducts().then(data => {
      this.products = data;
    });
    this.activeroute.queryParams.subscribe(params => {
      const id = params['id'];
      if (!isNullOrUndefined(id)) {
        this.customerService.getCustomerById(id)
          .then(users => {
            this.customer = users;
          }).catch(error => {
            this.route.navigate(['/clients']);
            this.toastr.errorToastr(error.statusText, 'Error!');
          });
      }
    });
  }
  productSelected(name: string) {
    let id = null;
    this.products.map(p => {
      if (p.name === name) {
        id = p.id;
        this.customer.productCategory = '';
        this.customer.item = '';
        this.productService.getProductById(id)
          .then(res => {
            this.categories = res.categories;
          }).catch(err => {
            this.toastr.errorToastr(err.message, 'Error!');
          });
      } else {
        return;
      }
    });
  }

  categorySelected(name: string) {
    let id = null;
    this.categories.map(c => {
      if (c.name === name) {
        id = c.id;
        this.categoryService.getCategoryById(id)
          .then(res => {
            this.items = res.items;
          }).catch(err => {
            this.toastr.errorToastr(err.message, 'Error!');
          });
      } else {
        return;
      }
    });
  }

  onSubmit() {
    this.customerService.updateAnnuityCustomer(this.customer)
      .then((_) => {
        this.route.navigate(['/maintainance']);
        this.toastr.successToastr('customer updated successfully', 'Success!');
      }).catch(error => {
        this.toastr.errorToastr(error.statusText, 'Error!');
      });
  }

  deleteCustomer() {
    this.customerService.removeCustomer(this.customer.entityId)
      .then((_) => {
        this.route.navigate(['/maintainance']);
        this.toastr.successToastr('customer successfully removed', 'Success!');
      }).catch(error => {
        this.toastr.errorToastr(error.statusText, 'Error!');
      });
  }

  onFormChanged() {
    if (
      this.customer.entityId === undefined ||
      this.customer.entityFullName === undefined ||
      this.customer.quantity === undefined ||
      this.customer.unitPrice === undefined ||
      this.customer.value === undefined
    ) {
      return;
    }

    if (this.customer.entityId.length === 19) {
      if (this.customer.entityFullName.length !== 0) {
        if (!isNullOrUndefined(this.customer.product)) {
          if (!isNullOrUndefined(this.customer.productCategory)) {
            if (!isNullOrUndefined(this.customer.item)) {
              if (this.customer.quantity >= 0) {
                if (this.customer.unitPrice >= 0) {
                  if (this.customer.value >= 0) {
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

}
