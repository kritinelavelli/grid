/*
 * Comment on each concept
 * Abstracts
 * Panel
 * Grid v List toggle
 * Dropdown
 * Icons
 * Make sure works for mobile
 * Slots
 * ngIf
 * Icons
 * Images
 * Filter
 * Components, interfaces, and utilities module?
 */

/*
<header>
  <ng-content select=".header"></ng-content>
</header>
<main>
  <ng-content select=".main"></ng-content>
</main>
<footer>
  <ng-content select=".footer"></ng-content>
</footer>
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

import { AppComponent } from './components/app/app.component';
import { ContentComponent } from './components/content/content.component';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { ActionsComponent } from './components/actions/actions.component';
import { InfoPanelComponent } from './components/info-panel/info-panel.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: [
    AppComponent,
    ContentComponent,
    CardComponent,
    ModalComponent,
    ActionsComponent,
    InfoPanelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}