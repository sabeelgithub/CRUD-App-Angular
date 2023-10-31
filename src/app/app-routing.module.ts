import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './pages/channel/channel.component';


const routes: Routes = [
  {path:'', redirectTo:'/channels', pathMatch:'full'},
  {path:'channels', component:ChannelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
