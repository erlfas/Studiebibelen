import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { VelgKommentarComponent } from './components/velg-kommentar/velg-kommentar.component';
import { BibelPanelComponent } from './components/bibel-panel/bibel-panel.component';
import { KommentarPanelComponent } from './components/kommentar-panel/kommentar-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    VelgKommentarComponent,
    BibelPanelComponent,
    KommentarPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
