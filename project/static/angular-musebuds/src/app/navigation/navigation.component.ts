import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  ngOnInit() { }

  @Output('change') change = new EventEmitter();
  isExpanded: boolean;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  changeBG() {
    this.change.emit();
  }
}
