import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { VelgKommentarComponent } from './components/velg-kommentar/velg-kommentar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    VelgKommentarComponent
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
