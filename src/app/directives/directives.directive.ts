import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[my-highlight]'
})
export class HighlightDirective {
  @HostBinding('class.my-highlight') true;
}