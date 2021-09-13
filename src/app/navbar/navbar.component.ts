import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    public afAuth: AngularFireAuth, private firestore: AngularFirestore,
    public Authservice :AuthService
 
    ) { }

  ngOnInit() {
  }

  onClickInventory()
  {
    if (this.Authservice.userLoggedIn == true)
{    this.router.navigate(['/inventory'], { relativeTo: this.route });
}
else{alert ("Must log in")}
  }
  onlogout(): void {
    
    this.afAuth.signOut();
    this.router.navigate(['/login'], { relativeTo: this.route });
    this.Authservice.userLoggedIn=false;
    console.log("this user "+this.Authservice.userLoggedIn)
}

onClicksupplier()
{
  if (this.Authservice.userLoggedIn == true)
{    this.router.navigate(['/suppliers'], { relativeTo: this.route });
}

}

onClicktrans()
{
  if (this.Authservice.userLoggedIn == true)
{    this.router.navigate(['/add-buy'], { relativeTo: this.route });
}

}

onClickSell()
{
  if (this.Authservice.userLoggedIn == true)
{    this.router.navigate(['/add-sell'], { relativeTo: this.route });
}

}
}
