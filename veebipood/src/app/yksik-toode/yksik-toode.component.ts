import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {
  private tooted = [
    {nimi: "Coca cola", hind: 2}, 
    {nimi: "Fanta", hind: 3},
    {nimi: "Sprite", hind: 2},
    {nimi: "Vichy", hind: 4}, 
    {nimi: "Vitamin well", hind: 5}
  ];
  private dbUrl = "https://angular-04-22-default-rtdb.europe-west1.firebasedatabase.app/tooted.json";
  toode: any;

  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    const toodeNimi = this.route.snapshot.paramMap.get("toodeNimi");
    console.log(toodeNimi);

    this.http.get<any>(this.dbUrl).subscribe(tagastus => {
      console.log(tagastus);
      const uusList = [];
      for (const key in tagastus) {
        uusList.push(tagastus[key]);
      }
      console.log(uusList);
      this.tooted = uusList;
      console.log(this.tooted);
      
      this.tooted.forEach(element => 
        console.log(element.nimi.toLowerCase().replace('õ','o').replace(' ','-')))
      console.log(toodeNimi);

      this.toode = this.tooted.find(element => 
        element.nimi.toLowerCase().replace('õ','o').replace(' ','-') === toodeNimi);
      console.log(this.toode);
    });
   
  }

}
