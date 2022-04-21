import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {
  private dbUrl = "https://angular-04-22-default-rtdb.europe-west1.firebasedatabase.app/tooted.json";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  lisa(vorm: NgForm) {
    console.log("vorm töötab");
    console.log(vorm);
    console.log(vorm.value);
    this.http.post(this.dbUrl,vorm.value).subscribe(() => console.log("hiljem"));
    console.log("see tuleb enne")
  }
}
