import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private route :ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  onClickInventory()
  {
    this.router.navigate(['/dashboard'], { relativeTo: this.route });

  }
}
