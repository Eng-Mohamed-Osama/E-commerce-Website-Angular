import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:FormGroup;
  constructor(private formBuilder : FormBuilder) { 
    this.user = this.formBuilder.group({
      Name:['' , [Validators.required]],
      UserEmail:['' , [Validators.required , Validators.pattern('[^@]+@[^\.]+\..+')]],
      UserName:['' ,[Validators.required]],
      userPassword:['' , [Validators.required,  Validators.minLength(8), Validators.maxLength(16)]],
      confirmedPassword:['' ,[Validators.required]]
    })
  }
  get userControls(){
    return this.user.controls
  }
 

  signup(){
    localStorage.setItem('login' ,"true")
    // this.router.navigate([''])

  }

  ngOnInit(): void {
  }

  redirectToLogin(){
    // this.router.navigate(['/login'])
  }
  
  

  

}
