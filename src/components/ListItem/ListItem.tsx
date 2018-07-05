import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ListItemProps {
  placeName: string;
  onItemPressed: () => void;
}

const listItem: React.SFC<ListItemProps> = (props: ListItemProps) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
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