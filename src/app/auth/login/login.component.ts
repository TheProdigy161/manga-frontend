import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    releaseDate: new FormControl('2023-07-29', Validators.required),
    finishedDate: new FormControl(),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
