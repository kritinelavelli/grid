import { NgModule } from '@angular/core';

import { UpperCasePipe, LowerCasePipe, InternetCasePipe } from './pipes.pipe';

@NgModule({
  declarations: [
    UpperCasePipe,
    LowerCasePipe,
    InternetCasePipe
  ],
  exports: [
    UpperCasePipe,
    LowerCasePipe,
    InternetCasePipe
  ],
})
export class PipesModule {}