import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformacoesService } from '../service/informacoes.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  informacoesForm: FormGroup;
  infoSelecionada;

  @Input() informacoes;
  @Output() nomeProfissao = new EventEmitter();
  @Output() enviarForm = new EventEmitter();
  @Output() deletaInfo = new EventEmitter();
  @Output() editaInfo = new EventEmitter();

  variavel = 'teste';

  constructor(private formBuilder: FormBuilder, private informacoesService: InformacoesService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.informacoesForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required]],
      profissao: [null],
      mostrarProfissao: [null]
    });
  }

  preencherForm(infoSelecionada) {
    this.informacoesForm.patchValue({
      id: infoSelecionada.id,
      nome: infoSelecionada.nome,
      profissao: infoSelecionada.profissao,
      mostrarProfissao: infoSelecionada.mostrarProfissao ? 'sim' : 'não'
    });
  }

  enviarProfissao(nome) {
    this.nomeProfissao.emit(nome);
  }

  send() {
    this.enviarForm.emit(this.informacoesForm.value);
  }

  deletaInformacao(id) {
    this.deletaInfo.emit(id);
  }

  editaInformacao(id) {
    this.lerPorId(id);
  }

  lerPorId(id) {
    this.informacoesService.readById(id).subscribe( informacao => {
      this.preencherForm(informacao);
    });
  }

}
