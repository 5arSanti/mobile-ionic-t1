import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ionic-component-card',
  templateUrl: './ionic-component-card.component.html',
  styleUrls: ['./ionic-component-card.component.scss'],
  standalone: false,
})
export class IonicComponentCardComponent {
  @Input() componentName?: string;
}
