import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  placeName: string;
}

const listItem: React.SFC<IProps> = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee'
  }
});

export default listItem;