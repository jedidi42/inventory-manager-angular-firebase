import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { InventoryService } from '../services/inventory.service';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-add-sell',
  templateUrl: './add-sell.component.html',
  styleUrls: ['./add-sell.component.css']
})
export class AddSellComponent implements OnInit {

  public Form: FormGroup;



  suppliers: Supplier [];
  items: Item[];

  


  constructor(

    private supplierService: SupplierService,
    public inventoryService: InventoryService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.Form = this.formBuilder.group({
      
     
        product: [''],
        supplier:[''],
        quantity:[''],
        description : [''],
        status:[''],
        date : [''],
        lastModified : ['']
    })      
  }

  ngOnInit(): void {

    this.supplierService.getsuppliers().subscribe(data => {
      this.suppliers = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Supplier
        };
      })
    });

     
    this.inventoryService.getInventory().subscribe(data => {
      this.items = data.map(e => {
        
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Item
        };
      })
    });
  }
pname="";
pqu=0;
pda="";
psup="";


  addItem()

  {
    
if ((this.pname=="") || (this.pqu <1) || (this.pda=="") )
    {
      alert('must fill required fields')
    }
    else
     { console.log(this.Form.value)
      this.inventoryService.createItem(this.Form.value);
      this.router.navigate(['/inventory']); }
     
  }

  }