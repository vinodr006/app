import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  list = [
    {
      number : '1',
      name:'home',
      icon:'fa-solid fa-house'

    },
    {
      number : '2',
      name:'RFI',
      icon:'fa-solid fa-house'

    },
    {
      number : '3',
      name:'construction',
      icon:'fa-solid fa-house'

    },
    {
      number : '4',
      name:'Details',
      icon:'fa-solid fa-house'

    },
    {
      number : '5',
      name:'Payment',
      icon:'fa-solid fa-payments'

    },
    {
      number : '6',
      name:'order',
      icon:'fa-solid fa-house'

    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
