import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
     public _settingService: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(color:string, link: any){
    /* console.log(link); */
    this.aplicarCheck(link);
    this._settingService.aplicarTema(color);
    
  }

  aplicarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');

    for( let ref of selectores ){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  colocarCheck(){

    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._settingService.ajustes.tema;

    for( let ref of selectores ){
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }

  }

}
