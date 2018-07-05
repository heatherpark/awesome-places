import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import { Place } from './src/constants';

interface AppState {
  places: Place[];
}

export default class App extends React.Component<{}, AppState> {
  state = {
    places: []
  }

  handlePlaceSubmit = (placeName: string) => {
    const newPlace = {
      // TODO: Use id generator
      key: Math.random(),
      value: placeName
    };

    this.setState((prevState: AppState) => ({
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
