import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  taskName!: string;

  
  constructor(private router: Router) {
    this.taskName = router.url.slice(1);
  }

  ngOnInit(): void {
  }


  activeBtn(taskName: string): void {
    this.taskName = taskName;

  }


  // headerClick(column: string): void {
  //   if (this.arrayOfAbonents) {
  //     this.sortColumn = column;
  //     if (this.orderType == 0) {
  //       this.orderType = 1;
  //     }
  //     else {
  //       this.orderType = -this.orderType;
  //     }
  //   }
  // }
}
