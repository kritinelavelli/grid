import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'my-actions',
  templateUrl: './actions.component.html',
  styleUrls: [ './actions.component.scss' ]
})
export class ActionsComponent  {
  private _columns;
  private _infoPanelOpened;

  public items = [1, 2, 3, 4, 5];

  @Input() selected;

  @Input()
  public get columns() {
    return this._columns;
  }
  public set columns(value) {
    this._columns = value;
    this.columnsChange.emit(value);
  }

  public get infoPanelOpened() {
    return this._infoPanelOpened;
  }
  public set infoPanelOpened(value) {
    this._infoPanelOpened = value;
    this.infoPanelOpenedChange.emit(value);
  }

  @Output() columnsChange = new EventEmitter<number>();
  @Output() infoPanelOpenedChange = new EventEmitter<boolean>();
  @Output() reset = new EventEmitter();
  @Output() delete = new EventEmitter();
}