import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-navbar-inicio',
  templateUrl: './navbar-inicio.component.html',
  styleUrls: ['./navbar-inicio.component.css']
})
export class NavbarInicioComponent implements OnInit {

  // aut:boolean=false; 
       

  constructor(private auth:AuthService) {}

  ngOnInit(): void {


    // this.aut= this.auth.estaAutentificado()
 
    
    
}

}
