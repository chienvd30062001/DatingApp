import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  bserUrl = "http://localhost:5128/api/"
  validationErrors : string[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.bserUrl + "buggy/not-found").subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
    })
  }

  get401Error() {
    this.http.get(this.bserUrl + "buggy/auth").subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
    })
  }

  get400Error() {
    this.http.get(this.bserUrl + "buggy/bad-request").subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
    })
  }

  get500Error() {
    this.http.get(this.bserUrl + "buggy/server-error").subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
    })
  }

  get400ValidationError() {
    this.http.post(this.bserUrl + "account/register", {}).subscribe(response => {
      console.log(response);
    },error => {
      console.log(error);
      this.validationErrors = error; 
    })
  }
}
