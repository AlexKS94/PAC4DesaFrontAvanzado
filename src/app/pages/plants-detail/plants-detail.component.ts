import { Component, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';

import { Plant } from '../../models/plant.interface';
import { PlantsService } from '../../services/plants.service';

@Component({
  selector: 'app-plant-detail',
  imports: [MatButtonModule, MatProgressSpinnerModule, MatExpansionModule],
  templateUrl: './plants-detail.component.html',
  styleUrl: './plants-detail.component.scss',
})
export class PlantsDetailComponent implements OnInit {
  plant = signal<Plant | null>(null);
  loading = signal<boolean>(true);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private plantsService: PlantsService,
  ) {}

  ngOnInit(): void {
    const plantId = Number(this.route.snapshot.paramMap.get('id'));

    if (plantId) {
      this.loading.set(true);

      this.plantsService.getPlantById(plantId).subscribe({
        next: (plant) => {
          this.plant.set(plant);
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Error loading plant detail', error);
          this.loading.set(false);
        },
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/plants']);
  }
}
