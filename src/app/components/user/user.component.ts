import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/iuser';
import { ProtectedService } from 'src/app/services/protected.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData!: any

  constructor(private protectedService: ProtectedService){
    // we will intercept each request and append HttpHeader with access token
    // in each request, with the help of HttpInterceptor.
  }

  ngOnInit(): void {
    this.protectedService.getUserData().subscribe({
      next: (res) => {
        this.userData = res.payload
        console.log(res)
      },
      error: (err) => {
        console.log("Err : ", err)
      }
    })
  }

}
