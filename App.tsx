import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import { Place } from './src/constants';
import placeImage from './src/assets/tokyo-main.jpg';

interface AppState {
  places: Place[];
  selectedPlace: Place | null;
}

export default class App extends React.Component<{}, AppState> {
  state = {
    places: [],
    selectedPlace: null
  }

  handlePlaceSubmit = (placeName: string) => {
    const newPlace = {
      // TODO: Use id generator
      key: Math.random(),
      name: placeName,
      image: placeImage
    };

    this.setState((prevState: AppState) => ({
      ...prevState,
      places: prevState.places.concat(newPlace)
    }));
  }

  handleItemSelected = (key: number) => {
    this.setState(prevState => {
      const place = prevState.places.find(place =>
        place.key === key);

      return {
        ...prevState,
        selectedPlace: place ? place : null
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selec />
        <View style={styles.placeInputContainer}>
          <PlaceInput onPlaceSubmit={this.handlePlaceSubmit.bind(this)} />
        </View>
        <View style={styles.listContainer}>
          <PlaceList
            onItemSelected={this.handleItemSelected}
            places={this.state.places} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: '100%'
  },
  placeInputContainer: {
    width: '100%'
  }
});
