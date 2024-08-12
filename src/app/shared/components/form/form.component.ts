import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent { 

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.min(10)]],
    });
  }

  onSubmit() {
      if (this.contactForm.valid) {
        const teplateParams = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        }
        
              emailjs.send('default_service', 'template_s7y5jct', teplateParams, 'QVLIQsVmEeIBw9KmF')
                .then((res: EmailJSResponseStatus) => {
                  console.log('Success', res.status, res.text);
                  alert('Mensaje enviado correctament!')
                  this.contactForm.reset();
                }, (error) => {
                  console.log('Faild...', error);
                  alert('Hubo un error al enviar el mensaje!');
                });
      } else {
        alert('Por favor, completa el fomaulario');
      }
  }

  
}
