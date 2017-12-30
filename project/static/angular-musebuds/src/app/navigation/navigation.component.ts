import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SlideInOutAnimation } from './../animations';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [SlideInOutAnimation]
})

export class NavigationComponent implements OnInit {
  ngOnInit() { }

  @Output('change') change = new EventEmitter();
  isExpanded: boolean;
  isMousedOver: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  toggleMouseEnter() {
    this.isMousedOver = true
  }
  toggleMouseLeave() {
    this.isMousedOver = false;
  }

  changeBG() {
    this.change.emit();
  }

}
