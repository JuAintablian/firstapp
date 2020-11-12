import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  @Input() pessoas;

  @Output() nome = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  mostrarMensagem(texto) {
    this.nome.emit(texto);
  }

}
