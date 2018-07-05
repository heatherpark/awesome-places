import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

interface AppState<T> {
  places: T[];
}

export type Place = {
  key: number;
  value: string;
}

export default class App extends React.Component<{}, AppState<Place>> {
  state = {
    places: []
  }

  handlePlaceSubmit = (placeName: string) => {
    const newPlace = {
      key: Math.random(),
      value: placeName
    };

    this.setState((prevState: AppState<Place>) => ({
      ...prevState,
      places: prevState.places.concat(newPlace)
    }));
  }

  handleItemDeleted = (key: number) => {
    this.setState(prevState => ({
      places: prevState.places.filter((place) => 
        place.key !== key)
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeInputContainer}>
          <PlaceInput onPlaceSubmit={this.handlePlaceSubmit.bind(this)} />
        </View>
        <View style={styles.listContainer}>
          <PlaceList 
            onItemDeleted={this.handleItemDeleted}
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
