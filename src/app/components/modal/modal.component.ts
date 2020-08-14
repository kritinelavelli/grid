/*
 * References:
 * - https://codepen.io/glued/pen/xxZWwOj
 * - https://codepen.io/tushgup/pen/RwrdrOZ
 */

import {
  Component,
  Input,
  HostBinding,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'my-modal',
  templateUrl: './modal.component.html',
  styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent  {
  private _cardRef: HTMLElement;

  public header: string;
  public body: string;

  @Input()
  @HostBinding('class.opened')
  public opened;

  constructor(private _elementRef: ElementRef) {}

  public open(cardRef, header, body, id) {
    this._cardRef = cardRef;
    this.header = header;
    this.body = body;
    this.animate(true);
  }

  public close() {
    this.animate(false);
  }

  private animate(isOpened) {
    this.opened = isOpened;

    const rect = this._cardRef.getBoundingClientRect();
    const scaleX = rect.width / window.innerWidth;
    const scaleY = rect.height / window.innerHeight;

    const closed = {
      transform: `translate(${rect.left}px, ${rect.top}px) scale(${scaleX}, ${scaleY})`
    };

    const opened = {transform: `translate(0, 0) scale(1, 1)`};

    const animation = this.opened ? [closed, opened] : [opened, closed];

    this._elementRef.nativeElement.animate(animation,
    {
      duration: 166,
      fill: 'forwards',
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });
  }
}