import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  title = 'My Exeprt Medics';
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  posts: any;
  onSubmit() {
    alert ('seding data') ;
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('firstParameter', this.registerForm.value.firstName);
    Params = Params.append('secondParameter', this.registerForm.value.lastName);
    alert (Params) ;
   /* return this.http.post('http://localhost:8080/RESTWebService/rest/lvcalc/rsfsjson', {params: { params: Params }}).subscribe(data => {
        this.posts = data; 
        console.log(this.posts);
      });  */

 
  return this.http.post('http://localhost:8080/RESTWebService/rest/lvcalc/rsfsjson', "Hello")
                  .toPromise()
                  .then((data) => data);

  }

}