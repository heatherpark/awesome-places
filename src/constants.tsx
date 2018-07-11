export interface PlacesState {
  places: Place[];
  selectedPlace: Place | null;
}

export type Place = {
  key: string;
  name: string;
  image: {};
}