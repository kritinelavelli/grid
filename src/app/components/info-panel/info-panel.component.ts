import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'my-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: [ './info-panel.component.scss' ]
})
export class InfoPanelComponent {
  @Input()
  @HostBinding('class.opened') opened: boolean;
}