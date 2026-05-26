import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Plant } from '../../models/plant.interface';

@Component({
  selector: 'app-plant-grid',
  imports: [MatTableModule],
  templateUrl: './plant-grid.component.html',
  styleUrl: './plant-grid.component.scss',
})
export class PlantGridComponent {
  @Input() plants: Plant[] = [];
  @Output() plantSelected = new EventEmitter<number>();

  displayedColumns: string[] = [
    'image',
    'commonName',
    'scientificName',
    'wikipediaUrl',
  ];

  selectPlant(plantId: number): void {
    this.plantSelected.emit(plantId);
  }
}
