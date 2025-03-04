import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgcSideMenuComponent } from './ggc-side-menu.component';
import { provideRouter } from '@angular/router';

describe('GgcSideMenuComponent', () => {
  let component: GgcSideMenuComponent;
  let fixture: ComponentFixture<GgcSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GgcSideMenuComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(GgcSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signIn when button is clicked', () => {
    spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call signOut when button is clicked', () => {
    spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    button.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });
});
