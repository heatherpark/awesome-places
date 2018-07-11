import { PlacesState } from '../../constants';

const initialState: PlacesState = {
  places: [],
  selectedPlace: null
};

const reducer = (state: PlacesState = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;