import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ListItemProps {
  placeName: string;
  placeImage: {};
  onItemPressed: () => void;
}

const listItem: React.SFC<ListItemProps> = (props: ListItemProps) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
    <Image source={props.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5
  }
});

export default listItem;