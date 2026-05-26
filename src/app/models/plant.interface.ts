export interface PlantListResponse {
  results: Plant[];
  page: number;
  per_page: number;
}

export interface PlantResponse {
  results: Plant[];
}

export interface Plant {
  id: number;
  observed_on: string | null;
  description: string | null;
  taxon: PlantTaxon;
}

export interface PlantTaxon {
  name: string;
  preferred_common_name?: string;
  default_photo?: {
    square_url?: string;
    medium_url?: string;
  };
  wikipedia_url: string;
}
