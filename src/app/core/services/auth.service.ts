import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0: auth0.WebAuth;
  private authOptions: auth0.AuthOptions;

  constructor() {

    // Set-up the authentication options for our flow
    this.authOptions = {
      domain: '<yourauth0domainhere>',
      clientID: '<yourauth0clientidhere>'
    };

    // Set-up the authentication flow
    this.auth0 = new auth0.WebAuth(this.authOptions);
  }

  public authorize() {
    this.auth0.authorize({
      redirectUri: 'http://localhost:4200/authorise',
      responseType: 'token id_token'
    });
  }

  public parseAccessToken() {
    this.auth0.parseHash((err, authResult) => {
      // <implement your logic here>
    });
  }
}
