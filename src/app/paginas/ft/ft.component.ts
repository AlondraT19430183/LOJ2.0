import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ft',
  templateUrl: './ft.component.html',
  styleUrls: ['./ft.component.css']
})
export class FtComponent implements OnInit {




  constructor( private auth:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  salir(){
    this.auth.logout();
    this.router.navigateByUrl('/foro')
}

}
