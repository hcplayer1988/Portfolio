import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",

  }

  mailTest = false;

  post = {
    endPoint: 'https://falko-katzer.de/sendMail.php', // hier den Pfad von der php Datei einfücgen!!!
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) { //  && !this.mailTest and th else if part only for testing can be deleted later!! Set the Mailttest to false!!!
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'), //console info can be deleted later
        });
    // } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    //   ngForm.resetForm();
    // }
  }
}

}
