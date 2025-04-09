import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
  transacoes = signal<Transacao[]>([]);

  saldo = computed( () => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      switch (transacaoAtual.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacaoAtual.valor;

        case TipoTransacao.SAQUE:
          return acc - transacaoAtual.valor;

        default:
          throw new Error('Tipo de Transação não identificado');
      }

    }, 0);
  });

  processarTransacao(transacao : Transacao) {
    this.transacoes.update((listaAtual) => [transacao,...listaAtual]);
    console.log(this.transacoes());
  }
}
