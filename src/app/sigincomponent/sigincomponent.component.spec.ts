import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigincomponentComponent } from './sigincomponent.component';

describe('SigincomponentComponent', () => {
  let component: SigincomponentComponent;
  let fixture: ComponentFixture<SigincomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigincomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigincomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
