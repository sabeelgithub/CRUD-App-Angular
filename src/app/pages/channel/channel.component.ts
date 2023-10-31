import { Component } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent {

  
  channelShow = true
  channelCreate = false;

  onTabChange(tab:'Channels'|'Add Channels'|any){
    if (tab === 'Channels'){
      this.channelCreate = false
      this.channelShow = true
    } else if (tab === 'Add Channels'){
      this.channelCreate = true
      this.channelShow = false
    }
  }
}
