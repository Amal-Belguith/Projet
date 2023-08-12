import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedService: string = ''; // Variable pour stocker la sélection de la première liste déroulante

  // Fonction pour détecter le changement dans la première liste déroulante
  onServiceChange(event: Event) {
    const selectedOption = event.target as HTMLSelectElement;
    this.selectedService = selectedOption.value;
  }

}
