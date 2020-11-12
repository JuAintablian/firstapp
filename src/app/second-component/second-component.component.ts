import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  @Input() informacoes;
  @Output() nomeProfissao = new EventEmitter();

  variavel = 'teste';

  constructor() { }

  ngOnInit() {
  }

  enviarProfissao(nome) {
    this.nomeProfissao.emit(nome);
  }

}
