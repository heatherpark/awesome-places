import * as React from 'react';
import { View, Text } from 'react-native';

import ListItem from '../ListItem/ListItem';

interface IProps<T> {
  places: T[];
}

const placeList: React.SFC<IProps<string>> = (props: IProps<string>) => (
  <View>
    {props.places.map((list: string, index: number) =>
      <ListItem
        key={index}
        place={list} />)}
  </View>
);

export default placeList;