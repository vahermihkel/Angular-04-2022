import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  tooted = [
    {nimi: "Coca cola", hind: 2}, 
    {nimi: "Fanta", hind: 3},
    {nimi: "Sprite", hind: 2},
    {nimi: "Vichy", hind: 4}, 
    {nimi: "Vitamin well", hind: 5}
  ];
  sumOfCart = 0;

  constructor(private http: HttpClient) { 
    console.log("ostukorv constructor käivitus");
  }

  ngOnInit(): void {
    console.log("ostukorv ngOnInit käivitus");
    this.arvutaKogusumma();
  }

  lisa(toode: any) {
    this.tooted.push(toode);
    this.arvutaKogusumma();
  }

  eemalda(toode: any) {
    const index = this.tooted.indexOf(toode);
    this.tooted.splice(index,1);
    this.arvutaKogusumma();
  }

  tyhjenda() {
    this.tooted = [];
    this.arvutaKogusumma();
  }

  arvutaKogusumma() {
    this.sumOfCart = 0;
    this.tooted.forEach(element => 
      this.sumOfCart += element.hind);
  }

  maksma() {
    const makseAndmed = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.sumOfCart,
      "order_reference": Math.random()*999999,
      "nonce": "qwe" + Math.random()*999999 + new Date(),
      "timestamp": new Date(),
      "customer_url": "https://people-afb31.web.app"
      };

    const headers = {
      headers: new HttpHeaders({"Authorization":"Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="})
    }

    this.http.post<any>("https://igw-demo.every-pay.com/api/v4/payments/oneoff", 
      makseAndmed,
      headers).subscribe(tagastus => location.href = tagastus.payment_link);
  }

}
