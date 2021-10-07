import { Component, Input } from '@angular/core';
import { TamanhoCopo } from './tamanhoCopo';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent  {

  countSize: number= 0;

  @Input() titulo: any;
  @Input() opcoes: Array<Object>=new Array();
  @Input() escolhaAte: any;


  getCheckedSize(e: any) {
    console.log(e.target.value)
    this.countSize += 1;
    console.log(this.countSize)
  }


}
