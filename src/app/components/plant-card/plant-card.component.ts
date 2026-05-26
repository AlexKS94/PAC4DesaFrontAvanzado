import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-plant-card',
  imports: [MatCardModule],
  templateUrl: './plant-card.component.html',
  styleUrl: './plant-card.component.scss',
})
export class PlantCardComponent {
  @Input() plants: Plant[] = [];
  @Output() plantSelected = new EventEmitter<number>();

  selectPlant(plantId: number): void {
    this.plantSelected.emit(plantId);
  }
}
