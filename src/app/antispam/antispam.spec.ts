import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Antispam } from './antispam';

describe('Antispam', () => {
  let component: Antispam;
  let fixture: ComponentFixture<Antispam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antispam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Antispam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
