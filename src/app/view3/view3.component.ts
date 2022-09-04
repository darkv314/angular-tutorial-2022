import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.scss']
})
export class View3Component implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe( params => {
      console.log('query params: ', params);
    })

    console.log('snapshot: ', this.activatedRoute.snapshot.queryParams)

  }

}
