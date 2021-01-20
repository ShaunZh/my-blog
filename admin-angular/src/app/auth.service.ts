import { Injectable } from '@angular/core';

const AUTHORIZATION_KEY = 'authorization'

@Injectable()
export class AuthService {

  getAuthorizationToken() {
    const auth = localStorage.getItem(AUTHORIZATION_KEY)
    if (!auth) {
      return null;
    }
    return auth
  }

  setAuthorizationToken(token: string) {
    localStorage.setItem(AUTHORIZATION_KEY, token)
  }

  clearAuthorizationToken() {
    localStorage.removeItem(AUTHORIZATION_KEY)
  }

  constructor() { }

}
