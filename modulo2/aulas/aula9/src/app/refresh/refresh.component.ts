import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit, OnDestroy {

  @Input() id: number = 0;
  interval: any;

  constructor() { }
  

  ngOnInit(): void {
   this.interval = setInterval( () => {
      console.log(`Compoenent #${this.id} refresh`)
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
