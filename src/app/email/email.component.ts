import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import  emailjs from '@emailjs/browser';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Tiago',
    from_email: '',
    subject: '',
    message: '',
  });

  constructor(private fb: FormBuilder){

  }

  async send(){
    emailjs.init('Cj1t1s4tpURQog6eJ');
   let response = await emailjs.send("service_yw5kaiv","template_h9s65mo",{
    from_name: this.form.value.from_name,
    to_name: "Tiago",
    subject: this.form.value.subject,
    message: this.form.value.message,
    from_email: this.form.value.from_email,
    });

    alert('Mensagem enviada.');
    this.form.reset();
  }

}


