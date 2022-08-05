import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditformComponent } from './auditform.component';

describe('AuditformComponent', () => {
  let component: AuditformComponent;
  let fixture: ComponentFixture<AuditformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
