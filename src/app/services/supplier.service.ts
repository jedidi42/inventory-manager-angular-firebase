import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private firestore: AngularFirestore) {}

  form = new FormGroup({
    supplierId: new FormControl(""),
    supplierName: new FormControl(""),
    supplierAdress: new FormControl(""),
    supplierMail: new FormControl(""),
  });

  //Firestore CRUD actions example
  createItem(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("supplier")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }


  updateSupplier(data) {
    return this.firestore.doc('supplier/' + data.id).update(data);
  }

  getsuppliers() {
    
    return this.firestore.collection("supplier").snapshotChanges();
    
  }

  deletesupplier(data) {

  

    this.firestore
      .collection("supplier")
      .doc(data.id)
      .delete();
  }
}

