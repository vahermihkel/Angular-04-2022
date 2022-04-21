import { HttpClient } from '@angular/common/http';
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
  private dbUrl = "https://angular-04-22-default-rtdb.europe-west1.firebasedatabase.app/tooted.json";
  // 1. faili
  // 2. andmebaas
  // 3. brauseri vahemälu kaudu (localStorage/sessionStorage)

  constructor(private http: HttpClient) { 
    console.log("avaleht constructor käivitus");
  } // failide ühendamised

  ngOnInit(): void { // käima minemise funktsioon
    console.log("avaleht ngOnInit käivitus");
    this.http.get<any>(this.dbUrl).subscribe(tagastus => {
      console.log(tagastus);
      const uusList = [];
      for (const key in tagastus) {
        uusList.push(tagastus[key]);
      }
      console.log(uusList);
      this.tooted = uusList;
    });
  }

  // korrutaKahega() {
  //   this.numbriline *= 2;
  //   this.string = "";
  //   this.numbriline = 0;
  // }

          // {nimi: "CC", hind: 2}
  lisaOstukorvi(toode: any) {
                //      "[{nimi: "CC", hind: 2}]"
    const tootedSS = sessionStorage.getItem("tooted");
    let ostukorv = [];
    if (tootedSS !== null) {
      ostukorv = JSON.parse(tootedSS);
    }
    // [{nimi: "CC", hind: 2}].push({nimi: "CC", hind: 2})
    ostukorv.push(toode);
                        // [{nimi: "CC", hind: 2},{nimi: "CC", hind: 2}]
    sessionStorage.setItem("tooted",JSON.stringify(ostukorv));
  }

  kustuta(toode: any) {
    const index = this.tooted.indexOf(toode);
    this.tooted.splice(index,1);
    this.http.put(this.dbUrl,this.tooted).subscribe();
  }
}
