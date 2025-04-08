import { Component, signal } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { FormNovaTransacaoComponent } from "./form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anybank';
  transacoes = signal<Transacao[]>([]);

  processarTransacao(transacao : Transacao) {
    this.transacoes.update((listaAtual) => [transacao,...listaAtual]);
    console.log(this.transacoes());
  }
}
