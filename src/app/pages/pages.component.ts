import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  public TEMA = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    const URL = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.TEMA?.setAttribute("href", URL);
  }
}
