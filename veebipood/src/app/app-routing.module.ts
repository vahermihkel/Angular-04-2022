import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';

const routes: Routes = [
  // mis järgneb baas URL-le (localhost:4200)
  { path: "", component: AvalehtComponent },
  // localhost:4200/ostukorv   ----   ostukorv.component.html  -> .css & .ts
  { path: "ostukorv", component: OstukorvComponent },
  { path: "lisa", component: LisaToodeComponent },
  { path: "toode/:toodeNimi", component: YksikToodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
