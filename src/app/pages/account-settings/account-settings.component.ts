import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  public TEMA = document.querySelector('#theme');
  public LINKS = document.querySelectorAll('.selector');
  
  ngOnInit(): void {
      this.LINKS = document.querySelectorAll('.selector');
      this.checkCurrentTheme();
  }

  changeTheme(theme:string){
    const URL = `./assets/css/colors/${theme}.css`;
    this.TEMA?.setAttribute("href", URL);
    localStorage.setItem('theme', URL);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
      this.LINKS.forEach(ele =>{
      ele.classList.remove("working");
      const BTN_THEME = ele.getAttribute('data-theme');
      const BTN_THEME_URL = `./assets/css/colors/${BTN_THEME}.css`;
      const CURRENT_THEME = this.TEMA?.getAttribute('href');

      if (BTN_THEME_URL===CURRENT_THEME) {
        ele.classList.add('working');
      }
    });
  }

}
