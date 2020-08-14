import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent  {
  private _selected: boolean;
  private _fullscreen: boolean;

  @ViewChild('buttonRef') buttonRef: ElementRef;

  @Input() header: string;
  @Input() body: string;
  @Input() id: string;

  @Output() select = new EventEmitter<string>();
  @Output() deselect = new EventEmitter<string>();
  @Output() open = new EventEmitter();

  @Input()
  @HostBinding('class.selected')
  public get selected(): boolean {
    return this._selected;
  }
  public set selected(value: boolean) {
    this._selected = value;
  }

  @HostListener('click', ['$event.target'])
  public onClick(target) {
    if (this.buttonRef.nativeElement === target) return;

    if (this.selected) {
      this.deselect.emit(this.id);
    } else {
      this.select.emit(this.id);
    }
  }

  constructor(private _elementRef: ElementRef) {}

  public onOpenClick() {
    this.open.emit(this._elementRef.nativeElement);
  }
}