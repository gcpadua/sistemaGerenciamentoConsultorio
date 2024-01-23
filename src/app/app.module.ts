import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadderComponent } from "./headder/headder.component";
import { CadastroPacientesComponent } from './cadastro-pacientes/cadastro-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    CadastroPacientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
