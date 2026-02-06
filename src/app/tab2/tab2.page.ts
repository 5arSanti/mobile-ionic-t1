import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  components = [
    { name: 'Segment', type: 'segment' },
    { name: 'Searchbar', type: 'searchbar' },
    { name: 'Item', type: 'item' },
    { name: 'Card', type: 'card' },
    { name: 'Avatar', type: 'avatar' },
    { name: 'Thumbnail', type: 'thumbnail' },
    { name: 'Label', type: 'label' },
    { name: 'Text', type: 'text' },
    { name: 'Note', type: 'note' },
    { name: 'Back Button', type: 'back-button' }
  ];

  constructor() {}

}
