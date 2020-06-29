import { NgModule } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';

const material = [
  MatExpansionModule
]



@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [material]
})
export class MaterialModule { }
