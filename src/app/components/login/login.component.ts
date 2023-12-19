import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      usernumber: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.authService.login(this.form.value['usernumber'],this.form.value['password']).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/home');
        } else {
          Swal.fire('Contraseña incorrecta', 'Intente de nuevo', 'error');
        }
      });
    }
    return;
  }

  isFieldInvalid(field: string) {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

}
