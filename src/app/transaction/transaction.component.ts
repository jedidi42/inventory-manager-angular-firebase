import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../services/inventory.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  items: Item[];

  constructor(private inventoryService: InventoryService,

    private router: Router,
    private route: ActivatedRoute,) { }

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

  }

  allowedit = false

  allowUpdate() {
    this.allowedit = !this.allowedit

  }

  onAcceptUpdate(data) {

    data.quantity = (<HTMLInputElement>document.getElementById(data.id)).value;
    this.inventoryService.updateItem(data);
  }







}