import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  constructor() { }

  private _notifications = new Subject<any>();
  public noteAdded = this._notifications.asObservable();

  private _notificationsOpen = new Subject<any>();
  public noteOpen = this._notificationsOpen.asObservable();

  private _notificationsClose = new Subject<any>();
  public noteClose = this._notificationsClose.asObservable();

  // success, error, warn, info
  public show(type: string, content: string, title?: string) {
    const id = new Date().getTime();
    this._notifications.next({ id, type, content, title });
  }

  open(type: string, content: string, title?: string, html?: string) {
    const id = new Date().getTime();
    this._notificationsOpen.next({ id, type, content, title, html });
    return id;
  }

  close(id: any) {
    this._notificationsClose.next(id);
  }
}
