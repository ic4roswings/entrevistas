import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiService: ApiService) { }

  login(user: string, password: string) {
    return this.apiService.login(user).pipe(
      map(response => {
        console.log(response['password'])
        if((response['password']) === password){
          return true
        } else 
        return false
      }

      ))
      
  }

}
