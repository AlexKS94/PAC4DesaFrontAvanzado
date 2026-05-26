import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantGridComponent } from './plant-grid.component';

describe('PlantGridComponent', () => {
  let component: PlantGridComponent;
  let fixture: ComponentFixture<PlantGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
