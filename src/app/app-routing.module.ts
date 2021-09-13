import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventoryComponent } from './inventory/inventory.component';

import { AddItemComponent } from './add-item/add-item.component';
import { AuthGuard } from './services/auth.guard';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddBuyComponent } from './add-buy/add-buy.component';
import { AddSellComponent } from './add-sell/add-sell.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'add-item', component: AddItemComponent  },
  { path: 'add-supplier', component: AddSupplierComponent  },
  { path: 'suppliers', component: SupplierComponent  },
  { path: 'transactions', component: TransactionComponent  },
  { path: 'add-buy', component: AddBuyComponent  },
  { path: 'add-sell', component: AddSellComponent  },

{path :'', redirectTo : '/login' , pathMatch :'full'},
{path :'**', redirectTo : '/login' , pathMatch :'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
