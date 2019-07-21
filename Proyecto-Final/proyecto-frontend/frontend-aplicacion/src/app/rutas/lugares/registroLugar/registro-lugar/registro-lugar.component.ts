import { Component, OnInit } from '@angular/core';
import { LoginHttpService } from 'src/app/servicios/http/login-http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LugarHttpService } from 'src/app/servicios/http/lugar-http.service';

@Component({
  selector: 'app-registro-lugar',
  templateUrl: './registro-lugar.component.html',
  styleUrls: ['./registro-lugar.component.css']
})
export class RegistroLugarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }


 
}
