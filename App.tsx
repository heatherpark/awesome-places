import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import List from './src/components/List/List';
import ListItem from './src/components/ListItem/ListItem';

interface IState {
  placeName: string;
  places: string[];
}

export default class App extends React.Component<{}, IState> {
  state = {
    placeName: '',
    places: []
  }

  handlePlaceSubmit = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState((prevState: IState) => ({
      ...prevState,
      places: [
        ...prevState.places,
        prevState.placeName
      ]
    }));
  }

  handlePlaceNameChanged = (value: string) => {
    this.setState({ placeName: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An awesome place"
            onChangeText={this.handlePlaceNameChanged}
            value={this.state.placeName} />
          <Button
            title="Add"
            style={styles.placeButton}
            onPress={this.handlePlaceSubmit} />
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
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});
