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

  constructor() { 
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

}
