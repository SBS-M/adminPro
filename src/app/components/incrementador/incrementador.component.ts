import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  
  @Input() leyenda: string = '';
  @Input() progreso: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: number){

    /* let elementHTML: any = document.getElementsByName('progreso')[0]; */

    if( newValue >= 100 ){
      this.progreso = 100;
    } else if( newValue <= 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    /* elementHTML.value = this.progreso; */

    this.txtProgress.nativeElement.value = this.progreso;
    this.changeValue.emit(this.progreso);
  }

  cambiaValor(valor) {

    if( this.progreso >= 100 && valor > 0){
      this.progreso = 100;
      return;
    }

    if( (this.progreso + valor) <= 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.changeValue.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

}
