import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { PlantCardComponent } from '../../components/plant-card/plant-card.component';
import { PlantGridComponent } from '../../components/plant-grid/plant-grid.component';
import { Plant } from '../../models/plant.interface';
import { PlantsService } from '../../services/plants.service';

@Component({
  selector: 'app-plants-list',
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    PlantCardComponent,
    PlantGridComponent,
    MatIconModule,
  ],
  templateUrl: './plants-list.component.html',
  styleUrl: './plants-list.component.scss',
})
export class PlantsListComponent {
  plants = signal<Plant[]>([]);
  loading = signal<boolean>(true);
  view = signal<'cards' | 'table'>('cards');
  constructor(
    private plantsService: PlantsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.plantsService.getPlants().subscribe({
      next: (response) => {
        const plantsImg = response.results.filter(
          (plant) => plant.taxon.default_photo,
        );

        this.plants.set(plantsImg);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading plants', error);
        this.loading.set(false);
      },
    });
  }

  changeCardsView(): void {
    this.view.set('cards');
  }

  changeTableView(): void {
    this.view.set('table');
  }

  gotToPlantDetail(plantId: number): void {
    this.router.navigate(['/plants', plantId]);
  }
}
