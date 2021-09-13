import { Component, OnInit } from '@angular/core';

import { SupplierService } from '../services/supplier.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Supplier } from '../supplier.model';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private supplierService: SupplierService,

    private router: Router,
    private route: ActivatedRoute,) { }

  addSupplier() {

    this.router.navigate(['/add-supplier'], { relativeTo: this.route });
  }

   deleteSupplier(data) {

     this.supplierService.deletesupplier(data);

   }

  ngOnInit() {



    this.supplierService.getsuppliers().subscribe(data => {
      this.suppliers = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Supplier
        };
      })
    });

  }

  // allowedit = false

  // allowUpdate() {
  //   this.allowedit = !this.allowedit

  // }

  // onAcceptUpdate(data) {

  //   data.quantity = (<HTMLInputElement>document.getElementById(data.id)).value;
  //   this.inventoryService.updateItem(data);
  // }







}
