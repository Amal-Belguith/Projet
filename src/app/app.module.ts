import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DevisComponent } from './devis/devis.component';
import { SUPPORTComponent } from './support/support.component';
import { PRODUITComponent } from './produit/produit.component';
import { VIDEOComponent } from './video/video.component';
import { WATCHGUARDComponent } from './watchguard/watchguard.component';
import { FORTINETComponent } from './fortinet/fortinet.component';
import { BITDEFENDERComponent } from './bitdefender/bitdefender.component';
import { AKCPComponent } from './akcp/akcp.component';
import { ContactComponent } from './contact/contact.component';
import { FIBREComponent } from './fibre/fibre.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    DevisComponent,
    SUPPORTComponent,
    PRODUITComponent,
    VIDEOComponent,
    WATCHGUARDComponent,
    FORTINETComponent,
    BITDEFENDERComponent,
    AKCPComponent,
    ContactComponent,
    FIBREComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
