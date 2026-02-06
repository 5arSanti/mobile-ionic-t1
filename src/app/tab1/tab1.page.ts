import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  components = [
    { name: 'Button', type: 'button' },
    { name: 'Badge', type: 'badge' },
    { name: 'Chip', type: 'chip' },
    { name: 'Checkbox', type: 'checkbox' },
    { name: 'Toggle', type: 'toggle' },
    { name: 'Radio', type: 'radio' },
    { name: 'Range', type: 'range' },
    { name: 'Progress Bar', type: 'progress-bar' },
    { name: 'Spinner', type: 'spinner' },
    { name: 'Icon', type: 'icon' }
  ];

  constructor() {}

}
