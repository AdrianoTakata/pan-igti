import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  expanded = true;
  @Input() title: string | undefined;

  expand() {
    this.expanded = true;
  }

  contract() {
    this.expanded = false;
  }
}
