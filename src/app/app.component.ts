import { Component } from '@angular/core';
import { JoguinhoComponent } from './joguinho/joguinho.component';
import { EmailComponent } from './email/email.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visit-card';
  componenteAtivo: string = 'Email'; // Inicie com o componente 'Joguinho' ativo
  botaoTexto = 'Jogar um Joguinho';

  abrirGit(){
    window.open('https://github.com/ArtemTiago', '_blank');
  }

  msgtest(){
    console.log("test message");
  }

  alternarComponente() {
    if (this.componenteAtivo === 'Email') {
      this.componenteAtivo = 'Joguinho';
      this.botaoTexto = 'Enviar Email';
    } else {
      this.componenteAtivo = 'Email';
      this.botaoTexto = 'Jogar um joguinho';
    }
  }

  reiniciarPartida() {
    this.componenteAtivo = 'Email';

    setTimeout(() => {
      this.componenteAtivo = 'Joguinho';
    }, 100);
  }
}
