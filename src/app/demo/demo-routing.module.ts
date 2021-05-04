import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from '../flexbox/flexbox.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
    { path: 'buttons', component: ButtonsComponent },
    { path: 'flexbox', component: FlexboxComponent},
    { path: '**', redirectTo: 'buttons' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
