import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardGridComponent } from './components/cards/card-grid/card-grid.component';
import { CardComponent } from './components/cards/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardGridComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
