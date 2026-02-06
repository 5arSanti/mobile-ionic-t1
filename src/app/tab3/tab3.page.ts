import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  components = [
    { name: 'Skeleton Text', type: 'skeleton-text' },
    { name: 'Datetime', type: 'datetime' },
    { name: 'FAB', type: 'fab' },
    { name: 'Select', type: 'select' },
    { name: 'Breadcrumbs', type: 'breadcrumbs' },
    { name: 'Textarea', type: 'textarea' },
    { name: 'Accordion', type: 'accordion' },
    { name: 'Tabs', type: 'tabs' },
    { name: 'Header', type: 'header' },
    { name: 'Footer', type: 'footer' }
  ];

  constructor() {}

}
