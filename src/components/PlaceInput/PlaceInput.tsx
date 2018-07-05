import * as React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface PlaceInputProps {
  onPlaceSubmit: (placeName: string) => void;
}

class PlaceInput extends React.Component<PlaceInputProps> {
  state = {
    placeName: ''
  }
  
  handleInputChange = (placeName: string) => {
    this.setState({ placeName });
  }

  handleSubmit = (placeName: string) => {
    if (placeName.trim() === '') return;
    this.props.onPlaceSubmit(placeName);
  }
  
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An awesome place"
          onChangeText={this.handleInputChange}
          value={this.state.placeName} />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={() => this.handleSubmit(this.state.placeName)} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
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

export default PlaceInput;