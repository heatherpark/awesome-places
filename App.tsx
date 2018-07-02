import * as React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface IState {
  placeName: string;
}

export default class App extends React.Component<{}, IState> {
  state = {
    placeName: ''
  }

  handlePlaceNameChanged = (value: string) => {
    this.setState({ placeName: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300 }}
          placeholder="An awesome place"
          onChangeText={this.handlePlaceNameChanged}
          value={this.state.placeName} />
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
});
