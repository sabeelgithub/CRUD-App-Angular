import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelCreateComponent } from './channel-create.component';

describe('ChannelCreateComponent', () => {
  let component: ChannelCreateComponent;
  let fixture: ComponentFixture<ChannelCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelCreateComponent]
    });
    fixture = TestBed.createComponent(ChannelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
