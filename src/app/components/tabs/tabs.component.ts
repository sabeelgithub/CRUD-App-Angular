import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  @Input("tabs") tabs:string[] = [];
  @Output('clicked') clciked:EventEmitter<string> = new  EventEmitter()
  private _selectedTab = this.tabs[0]??'';
  set selectedTab(tab:string){
    this.clciked.emit(tab);
    this._selectedTab = tab;
  }
  get selectedTab(){
    return this._selectedTab;
  }

  toggletab(tab:string){
    this.selectedTab = tab;
  }
}
