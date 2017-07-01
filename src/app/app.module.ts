import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { VelgKommentarComponent } from './components/velg-kommentar/velg-kommentar.component';
import { TestDropdownComponent } from './components/test-dropdown/test-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBoardComponent,
    VelgKommentarComponent,
    TestDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
