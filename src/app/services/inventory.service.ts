import { Injectable } from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    itemId: new FormControl(""),
    itemName: new FormControl(""),
    itemSupplier: new FormControl(""),
    itemQuantity: new FormControl(""),
  });

  //Firestore CRUD actions example
  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("inventory")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateItem(data) {
    return this.firestore.doc('inventory/' + data.id).update(data);
  }

  getInventory() {
    
    return this.firestore.collection("inventory").snapshotChanges();
    
  }

  deleteItem(data) {

  

    this.firestore
      .collection("inventory")
      .doc(data.id)
      .delete();
  }


  getInventoryByName(data) {
    
    return this.firestore.collection('/inventory', ref => ref.where('product', '==', data));
}}
