import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private msalService: MsalService) { }

  setActiveAccount() {
    this.msalService.instance.handleRedirectPromise().then(
        res => {
            if (res != null && res.account != null) {
                this.msalService.instance.setActiveAccount(res.account)
            }
        }
    )
  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() != null
  }

  login() {
      this.msalService.loginRedirect();
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(response.account);
    // });
  }

  logout() {
    this.msalService.logout();
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}