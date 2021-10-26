import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * This service is emulator of user due to rest without of security and auth functional.
 */
export class UserEmulateService {
  public currentUserId;
  constructor() {}
}
