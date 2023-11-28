import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { platform } from 'os';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  platformId: Object;
  constructor(@Inject(PLATFORM_ID) platformId: object) { 
    this.platformId = platformId;
  }

  currentUser$ = new BehaviorSubject<
{ id: string; name: string } | null | undefined
>(undefined);
setCurrentUser() {
 
  if (isPlatformBrowser(this.platformId) && localStorage.getItem('token')) {
    this.currentUser$.next({ id: '1', name: 'Foo' });
    } else {
    this.currentUser$.next(null);
    }
    }
}

