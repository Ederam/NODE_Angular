import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  // fgValidator = new FormControl();

    profileForm = new FormGroup({
      document: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cellphone: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(14)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('',[Validators.required, Validators.minLength(2)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)])
  }); 

  constructor() { } 

  ngOnInit(): void {    
    // this.FormBuilding();
  }

/*  FormBuilding(){
    /* this.fgValidator=this.fb.group({
      document: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      cellphone: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(14)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required, Validators.minLength(3)]]
      
    }); */
  //}  */

 CustomerRegisterFn(){
   /*  if(this.fgValidator?.invalid){
      alert('Invalid Form');
      return false;
  } */
    alert('Registering...');
    return false;
  } 

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //alert('Valide que haya diligenciado todos los campos obligatorios');
    //console.warn(this.profileForm.value);

    if(this.profileForm?.invalid){
      alert('Invalid Form');
      return false;
    } 
      alert('Registering...');
      return false;
  }

  /* get fgv()
  {
    return this.fgValidator;
  } */
}
