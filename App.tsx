import * as React from 'react';
import { Button, TextInput, StyleSheet, View } from 'react-native';

interface IState {
  placeName: string;
}

export default class App extends React.Component<{}, IState> {
  state = {
    placeName: ''
  }

  handlePlaceNameAdded = () => {

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
            onPress={this.handlePlaceNameAdded} />
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
  }
});
