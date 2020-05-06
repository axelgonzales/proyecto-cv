import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  titulo: string;
 
  constructor(
              private router: Router,) 
  {
    this.getDataRoute()
      .subscribe( data => {
        this.titulo = data.snapshot.data.titulo;
      });
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd)
    ).pipe(
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
    );
  }
  
}
