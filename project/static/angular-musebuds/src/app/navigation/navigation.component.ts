import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() change = new EventEmitter();

  ngOnInit(){}

  changeBG(){
    this.change.emit();
  }
}
