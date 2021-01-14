import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
  @Input() isHandset
  @Output() sidenavToggled = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  sidenavToggle() {
    this.sidenavToggled.emit()
  }

}
