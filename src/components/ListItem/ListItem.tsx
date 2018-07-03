import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps<T> {
  placeName: T;
}

const listItem: React.SFC<IProps<string>> = (props: IProps<string>) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
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