import { Component, Input, Output, EventEmitter } from '@angular/core';
;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating: any;
  @Output() ratingChange = new EventEmitter<number>();

  onClick(i:number) {
    this.ratingChange.emit(i);
  }

}
