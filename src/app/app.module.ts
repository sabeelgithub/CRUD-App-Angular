import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './components/tabs/tabs.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelCreateComponent } from './components/channel-create/channel-create.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { HeadingComponent } from './components/heading/heading.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ChannelListComponent,
    ChannelCreateComponent,
    ChannelComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
