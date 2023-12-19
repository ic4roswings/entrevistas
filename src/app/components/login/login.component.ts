import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      usernumber: ['', [Validators.pattern('^[0-9]{5,}$'), Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      // TODO: Auth Logic
      this.router.navigateByUrl('/home');
    }
    return;
  }

  isFieldInvalid(field: string) {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

}
