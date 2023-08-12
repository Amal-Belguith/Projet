import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: ['Admin'],
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
});

constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller) {}

async send() {
    if (this.form.valid) {
        emailjs.init('gTcq0rKJRxqigUECt');
        let response = await emailjs.send('service_7et5s1t', 'template_kq9p5ko', {
            from_name: this.form.value.from_name,
            to_name: this.form.value.to_name,
            from_email: this.form.value.from_email,
            subject: this.form.value.subject,
            message: this.form.value.message,
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