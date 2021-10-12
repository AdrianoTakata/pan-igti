import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula11';
  text = "Uma MenSagem quaLquer"
  n = 12502.1254
  hoje = new Date();
  meuCep = '30882770';
  meuCpf = '12345678912';

  strings: string[] = [
    'gato',
    'cavalo'
  ];

  addString(newString: string) {
    this.strings.push(newString);
    //this.strings = [...this.strings, newString];
  }
}
