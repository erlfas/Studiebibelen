import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { VelgKommentarComponent } from './components/velg-kommentar/velg-kommentar.component';
import { VelgBibeltekstComponent } from './components/velg-bibeltekst/velg-bibeltekst.component';
import { VelgKapittelComponent } from './components/velg-kapittel/velg-kapittel.component';
import { VelgVersComponent } from './components/velg-vers/velg-vers.component';

import { serviceInjectables } from './services/service.injectables';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    VelgKommentarComponent,
    VelgBibeltekstComponent,
    VelgKapittelComponent,
    VelgVersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    serviceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
