import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobileChatComponent } from './header-mobile-chat.component';

describe('HeaderMobileChatComponent', () => {
  let component: HeaderMobileChatComponent;
  let fixture: ComponentFixture<HeaderMobileChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMobileChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMobileChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
