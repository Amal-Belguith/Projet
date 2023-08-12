import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  selectedService: string = '';

  onServiceChange(event: Event) {
    const selectedOption = event.target as HTMLSelectElement;
    this.selectedService = selectedOption.value;
  }

  form: FormGroup = this.fr.group({
    fr_name: ['', Validators.required],
    to_name: ['Admin'],
    fr_email: ['', [Validators.required, Validators.email]],
    fr_tel: ['', Validators.required],
    fr_soc: ['', Validators.required],
    fr_service: ['', Validators.required],
    fr_produit: '',
    fr_description: ['', Validators.required],
  });

  constructor(private fr: FormBuilder, private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller) {}

  async sendy() {
    if (this.form.valid && this.form.touched) {
      emailjs.init('fUiVrafjgjYZwXxOA');
      let response = await emailjs.send('service_aafkdvl', 'template_q0pu1pu', {
        fr_name: this.form.value.fr_name,
        to_name: this.form.value.to_name,
        fr_email: this.form.value.fr_email,
        fr_tel: this.form.value.fr_tel,
        fr_soc: this.form.value.fr_soc,
        fr_service: this.form.value.fr_service,
        fr_produit: this.form.value.fr_produit,
        fr_description: this.form.value.fr_description,
      });

      alert('Message envoyé');
      this.form.reset();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToFragment(fragment);
      }
    });
  }

  private scrollToFragment(fragment: string): void {
    // Scroll to the element with the specified fragment ID
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

