import * as React from 'react';
import { Button, Image, Modal, View, Text } from 'react-native';

interface PlaceDetailProps {
  selectedPlace: {
    placeName: string;
    placeImage: {};
  }
}

const placeDetail: React.SFC<PlaceDetailProps> = props => (
  <Modal>
    <View>
      <Image source={props.selectedPlace && props.selectedPlace.placeImage} />
      <Text>{props.selectedPlace && props.selectedPlace.placeName}</Text>
      <View>
        <Button />
        <Button />
      </View>
    </View>
  </Modal>
);

export default placeDetail;