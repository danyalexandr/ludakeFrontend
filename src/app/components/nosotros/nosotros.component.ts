import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})


export class NosotrosComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  panelOpenStateMision = false;
  panelOpenStateVision = false;
  panelOpenStateObjetivo = false;

  //prueba de formualario de contacto

   onSubmit() {
    const url = 'https://ejemplo.com/api/correo';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    const body = {
      to: 'tucorreo@ejemplo.com',
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message + '\n\n' +
               'Nombre: ' + this.contactForm.value.name + '\n' +
               'Correo electrónico: ' + this.contactForm.value.email
    };
  
    this.http.post(url, JSON.stringify(body), { headers }).subscribe(
      (response) => {
        console.log(response);
        alert('El mensaje se ha enviado correctamente.');
        this.contactForm.reset();
      },
      (error) => {
        console.error(error);
        alert('Ha ocurrido un error al enviar el mensaje. Por favor, intenta de nuevo más tarde.');
      }
    );
  }
  
}
