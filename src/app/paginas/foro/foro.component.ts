import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/login')
}
}
