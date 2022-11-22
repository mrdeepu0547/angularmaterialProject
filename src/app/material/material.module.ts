import { NgModule } from '@angular/core';
import{MatButtonModule} from'@angular/material/button';
import{MatSidenavModule} from'@angular/material/sidenav';
const materials=[
MatButtonModule,
MatSidenavModule
]
@NgModule({
  declarations: [],
  imports: [materials],
  exports:[materials]
})
export class MaterialModule { }
