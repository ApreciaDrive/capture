import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', class: '' },
  { path: '/create', title: 'Create', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    // if ($(window).width() > 991) {
    //   return false;
    // }
    // return true;
  }
}
