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
    { name: 'Reorder', type: 'reorder' },
    { name: 'Menu Button', type: 'menu-button' },
    { name: 'Breadcrumbs', type: 'breadcrumbs' },
    { name: 'List', type: 'list' },
    { name: 'Accordion', type: 'accordion' },
    { name: 'Tabs', type: 'tabs' },
    { name: 'Toolbar', type: 'toolbar' },
    { name: 'Header', type: 'header' },
    { name: 'Footer', type: 'footer' }
  ];

  constructor() {}

}
