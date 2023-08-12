import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SUPPORTComponent implements OnInit {
  form: FormGroup = this.f.group({
    f_name: ['', Validators.required],
    to_name: ['Admin'],
    f_tel: ['', Validators.required],
    f_viewr: ['', Validators.required],
    f_date: ['', Validators.required],
    f_heure: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(private f: FormBuilder, private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller) {}

  async sendi() {
    if (this.form.valid) {
      emailjs.init('gTcq0rKJRxqigUECt');
      let response = await emailjs.send("service_7et5s1t", "template_615blpf", {
        f_name: this.form.value.f_name,
        to_name: this.form.value.to_name,
        f_tel: this.form.value.f_tel,
        f_viewr: this.form.value.f_viewr,
        f_date: this.form.value.f_date,
        f_heure: this.form.value.f_heure,
        description: this.form.value.description,
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