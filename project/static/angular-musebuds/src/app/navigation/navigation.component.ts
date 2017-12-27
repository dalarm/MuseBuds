import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'], 
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
