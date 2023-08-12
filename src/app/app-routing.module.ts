import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { DevisComponent } from './devis/devis.component';
import { SUPPORTComponent } from './support/support.component';
import { PRODUITComponent } from './produit/produit.component';
import { VIDEOComponent } from './video/video.component';
import { WATCHGUARDComponent } from './watchguard/watchguard.component';
import { FORTINETComponent } from './fortinet/fortinet.component';
import { BITDEFENDERComponent } from './bitdefender/bitdefender.component';
import { AKCPComponent } from './akcp/akcp.component';
import { FIBREComponent } from './fibre/fibre.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'About',component:AboutComponent
  },
  {
    path:'Services',component:ServicesComponent
  },
  {
    path:'Produits',component:PRODUITComponent
  },
  {
    path:'Contact',component:ContactComponent
  },
  {
    path:'Devis',component:DevisComponent
  },
  {
    path:'Support',component:SUPPORTComponent
  },
  {
    path:'VidéoSurveillance',component:VIDEOComponent
  },
  {
    path:'Watchguard',component:WATCHGUARDComponent
  },
  {
    path:'Fortinet',component:FORTINETComponent
  },
  {
    path:'Bitdefender',component:BITDEFENDERComponent
  },
  {
    path:'Akcp',component:AKCPComponent
  },
  {
    path:'Fibre',component:FIBREComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,AboutComponent,ServicesComponent,ContactComponent,SUPPORTComponent,PRODUITComponent,VIDEOComponent,WATCHGUARDComponent,FORTINETComponent,BITDEFENDERComponent,AKCPComponent,FIBREComponent]
