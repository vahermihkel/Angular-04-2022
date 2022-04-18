import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

const routes: Routes = [
  // mis järgneb baas URL-le (localhost:4200)
  { path: "", component: AvalehtComponent },
  // localhost:4200/ostukorv   ----   ostukorv.component.html  -> .css & .ts
  { path: "ostukorv", component: OstukorvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
