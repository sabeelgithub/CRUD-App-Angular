import { Component, OnInit, inject } from '@angular/core';
import { ServiceAllService } from 'src/app/service-all.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit{
  channel = inject(ServiceAllService)

  data:any = [];

  

  

  getAllList(){
    this. channel.getAll().subscribe((response) => {
      this.data = response;
      console.log(this.data,'data');
      console.log(response,'res')
    })
  }


  ngOnInit(): void {
    this.getAllList()
  }

  deleteChannel(id:number){
    this.channel.delete(id).subscribe((response)=>{
      window.alert(response)
      this.data = this.data.filter((item:any)=>{
        return item.id !== id
      })
    })

  }

}
