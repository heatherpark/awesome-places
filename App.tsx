import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import List from './src/components/List/List';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

interface IState<T> {
  places: T[];
}

export default class App extends React.Component<{}, IState<string>> {
  state = {
    places: []
  }

  handlePlaceSubmit = (place: string) => {
    this.setState((prevState: IState<string>) => ({
      ...prevState,
      places: [
        ...prevState.places,
        place
      ]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeInputContainer}>
          <PlaceInput onPlaceSubmit={this.handlePlaceSubmit.bind(this)} />
        </View>
        <View style={styles.listContainer}>
          <List placeList={this.state.places} />
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
