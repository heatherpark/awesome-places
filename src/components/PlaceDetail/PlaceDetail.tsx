import * as React from 'react';
import { Button, Image, Modal, StyleSheet, View, Text } from 'react-native';

import { Place } from '../../constants';

interface PlaceDetailProps {
  selectedPlace: Place | null;
}

const placeDetail: React.SFC<PlaceDetailProps> = props => {
  const renderModal = (selectedPlace: Place) => (
    <React.Fragment>
      <Image
        style={styles.placeImage}
        source={selectedPlace.image} />
      <Text style={styles.placeName} >{selectedPlace.name}</Text>
    </React.Fragment>
  );

  return (
    <Modal
      animationType="slide"
      visible={props.selectedPlace !== null}>
      <View style={styles.modalContainer}>
        {props.selectedPlace && renderModal(props.selectedPlace)}
        <View>
          <Button onPress={() => { }} title="Delete" color="red" />
          <Button onPress={() => { }} title="Close" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});

export default placeDetail;