import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { SupplierService } from '../services/supplier.service';
@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  public Form: FormGroup;



  constructor(

    public supplierService: SupplierService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.Form = this.formBuilder.group({
      
     
        name: [''],
        phone:[''],
        adress:[''],
        mail : [''],
        
    })      
  }

  ngOnInit(): void {
  }
pname="";
pqu="";
pda="";
psup="";


  addSupplier()

  {
if ((this.pname=="") || (this.pqu =="") || (this.pda=="") || (this.psup==""))
    {
      alert('must fill required fields')
    }
    else
     { console.log(this.Form.value)
      this.supplierService.createItem(this.Form.value);
      this.router.navigate(['/suppliers']); }
     
  }

  }
