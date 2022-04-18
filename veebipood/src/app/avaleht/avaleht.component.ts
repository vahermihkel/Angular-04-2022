import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  // string = "sõnaline"; 
  // numbriline = 123; 
  // kahendV22rtus = true; // boolean
  tooted = [
    {nimi: "Coca cola", hind: 2}, 
    {nimi: "Fanta", hind: 3},
    {nimi: "Sprite", hind: 2},
    {nimi: "Vichy", hind: 4}, 
    {nimi: "Vitamin well", hind: 5}
  ];
  // 1. faili
  // 2. andmebaas
  // 3. brauseri vahemälu kaudu (localStorage/sessionStorage)

  constructor() { 
    console.log("avaleht constructor käivitus");
  } // failide ühendamised

  ngOnInit(): void { // käima minemise funktsioon
    console.log("avaleht ngOnInit käivitus");
  }

  // korrutaKahega() {
  //   this.numbriline *= 2;
  //   this.string = "";
  //   this.numbriline = 0;
  // }

  lisaOstukorvi(toode: any) {
    const tootedSS = sessionStorage.getItem("tooted");
    let ostukorv = [];
    if (tootedSS !== null) {
      ostukorv = JSON.parse(tootedSS);
    }
    ostukorv.push(toode);

    sessionStorage.setItem("tooted",JSON.stringify(ostukorv));
  }
}
