import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/post';
import { ServiceAllService } from 'src/app/service-all.service';

@Component({
  selector: 'app-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.css']
})
export class ChannelCreateComponent {

  formData = new FormGroup({
    channel_name : new FormControl('')
  })

  channel = inject(ServiceAllService)

  
  channelcreateSubmit(){
    const channel_name_obj = this.formData.value
    const length = channel_name_obj?.channel_name?.length
    if (length && length>=1){      
      this.channel.create(this.formData.value as Post).subscribe((response)=>{
        window.alert(response)
        
      })
    } else {
      window.alert('ooops something wrnt werong!!!')
    }
  }
}
