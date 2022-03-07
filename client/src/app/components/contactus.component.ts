import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  lat = 1.196104;
  lng = 103.767523;

  constructor() { }

  ngOnInit(): void {
  }

}
