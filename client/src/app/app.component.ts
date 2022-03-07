import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  constructor(private router:Router, private tokenSvc : TokenStorageService){}


  ngOnInit() {

  }

  ngOnDestroy() {

    sessionStorage.clear();
  }

  logout(){
    window.sessionStorage.clear()
    this.router.navigate([''])
  }
}
