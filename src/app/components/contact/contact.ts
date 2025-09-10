import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  privacyAccepted: boolean = false;




  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",

  }

  mailTest = false;

  post = {
    endPoint: 'https://falko-katzer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && this.privacyAccepted) { 
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'), 
        });
    // } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    //   ngForm.resetForm();
    // }
  }
}

}
