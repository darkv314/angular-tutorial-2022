import { Component } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test';

  public data$ = of('Hola');

  public youtube$ = new BehaviorSubject<number>(0);
  public tiktok$ = new BehaviorSubject<number>(0);
  public twitter$ = new BehaviorSubject<number>(0);

  public person1!: Subscription;
  public person2!: Subscription;

  constructor() {
    this.data$.pipe(map((d) => d + '-map')).subscribe((res) => {
      console.log('Soy suscriptor', res);
    });

    this.youtube$.subscribe(res => {
      console.log('youtube subscription: ', res);
    })

    this.person1 = this.tiktok$.subscribe(res => {
      console.log('Person1 tiktok subscription: ', res);
    });

    this.person2 = this.tiktok$.subscribe(res => {
      console.log('Person2 tiktok subscription: ', res);
    });

    this.twitter$.subscribe(res => {
      console.log('Twitter subscription: ', res);
    });
  }

  addVideo() {
    this.youtube$.next(1);
  }

  addTikTok() {
    this.tiktok$.next(2);
  }

  addTweet() {
    this.twitter$.next(3);
  }

  deleteTikTok() {
    this.person1.unsubscribe();
  }
}
