import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item.model';
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items: Item[];

  constructor(private inventoryService: InventoryService,

    private router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore) { }

  onAddItem() {

    this.router.navigate(['/add-item'], { relativeTo: this.route });
  }

  deleteItem(data) {

    this.inventoryService.deleteItem(data);

  }

  ngOnInit() {



    this.inventoryService.getInventory().subscribe(data => {
      this.items = data.map(e => {
        
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Item
        };
      })
    });
console.log(this.items)
  }

  allowedit = false

  allowUpdate() {
    this.allowedit = !this.allowedit

  }

  onAcceptUpdate(data) {

    data.quantity = (<HTMLInputElement>document.getElementById(data.id)).value;
    data.lastModification= new Date().toJSON().slice(0,10);
    alert(data.lastModification);
    this.inventoryService.updateItem(data);
  }

  productName="";
  supplierName="";
  statusSearch="";

  onSearch() 

 {

alert("")

  alert ((this.firestore.collection('/inventory', ref => ref.where('product', '==', this.productName)))[0]);



}
}

