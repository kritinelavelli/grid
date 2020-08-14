import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter
} from '@angular/core';

import { IUser } from '../../interfaces';

const COLUMNS_DEFAULT = 3;

@Component({
  selector: 'my-content',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.scss' ]
})
export class ContentComponent  {
  private _data: IUser[];
  private _selected: string;

  public _columns = COLUMNS_DEFAULT;

  @Input()
  public get selected() {
    return this._selected;
  }
  public set selected(value) {
    this._selected = value;
    this.selectedChange.emit(value);
  }

  @Output() selectedChange = new EventEmitter<string>();

  @Input()
  public get data(): any[] {
    return this._data;
  }
  public set data(value: any[]) {
    this._data = value;
  }

  @Input()
  @HostBinding('style.--columns')
  public get columns(): number {
    return this._columns;
  }
  public set columns(value: number) {
    this._columns = value;
  }

  public delete() {
    this.data = this.data.filter(item => item.id !== this.selected);
    this.selected = null;
  }

  public reset() {
    this.columns = COLUMNS_DEFAULT;
    this.selected = null;
  }

  public onCardSelect(id) {
    this.selected = id;
  }

  public onCardDeselect(id) {
    this.selected = null;
  }
}