import { NgModule } from '@angular/core';

import { HighlightDirective } from './directives.directive';

@NgModule({
  declarations: [HighlightDirective],
  exports: [HighlightDirective],
})
export class DirectivesModule {}