import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  informacoesForm: FormGroup;
  informacaoSelecionada;

  constructor(private informacoesService: InformacoesService, private formBuilder: FormBuilder) {}

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

  enviarInformacoes(form) {
    form.mostrarProfissao = form.mostrarProfissao === 'sim' ? true : false;

    if (form.id) {
      this.informacoesService.update(form).subscribe(() => {
        alert('informacao atualizada');
      });
    } else {
      this.informacoesService.create(form).subscribe( () => {
        alert('informação guardada');
      });
    }
  }

  deleteInformacao(id) {
    this.informacoesService.delete(id).subscribe( () => {
      alert('informacao deletada');
    });
  }

  atualizar(form) {
    this.informacoesService.update(form).subscribe(() => {
      alert('informacao atualizada');
    });
  }
}
