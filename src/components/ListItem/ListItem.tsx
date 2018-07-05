import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps<T> {
  place: T;
  onItemPressed: () => void;
}

const listItem: React.SFC<IProps<string>> = (props: IProps<string>) => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.place}</Text>
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