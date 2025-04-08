import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  transacaoCriada = output<Transacao>();


  aoSubmeter() {
    console.log(this.tipoTransacao);
    console.log(this.valorTransacao);

    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
