import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  name$: Observable<string>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn$ = of(true);
    this.name$ = of('invitado');
  }

  onLogout() {
    // this.authService.loggedIn.next(false);
    this.router.navigateByUrl('/login');
  }

}
