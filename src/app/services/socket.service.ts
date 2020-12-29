import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io.connect('https://p7inv.sse.codesandbox.io/');
  }

  listen(eventName: string) {
    return new Observable((observer) => {
      this.socket.on(eventName, (result) => {
        console.log(result);
        observer.next(result);
      });
    });
  }
}
