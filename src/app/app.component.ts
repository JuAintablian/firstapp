import { Component, OnInit } from '@angular/core';
import { InformacoesService } from './service/informacoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lista = [
    { nome: 'Carol', idade: 24, corFavorita: 'azul'},
    { nome: 'Juliana', idade: 22, corFavorita: 'roxo'}
  ];

  listaSecond;

  constructor(private informacoesService: InformacoesService) {}

  ngOnInit() {
    this.listarInformacoes();
  }

  listarInformacoes() {
    this.informacoesService.read().subscribe( informacoes => {
      this.listaSecond = informacoes;
    });
  }

  mostrarTexto(event) {
    console.log(event);
  }

  mostrarProfissao(event) {
    alert(event);
  }
}
