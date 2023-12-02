import { Component, OnInit } from '@angular/core';
import { ProtectedService } from 'src/app/services/protected.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData!: any

  constructor(private protectedService: ProtectedService){}

  ngOnInit(): void{
    this.protectedService.getAdminData().subscribe({
      next: (res) =>{
        this.adminData = res.payload
        console.log(res)
      },error: (err) =>{
        console.log(err)
      }
    })
  }
}
