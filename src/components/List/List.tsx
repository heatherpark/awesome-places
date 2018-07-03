import * as React from 'react';
import { View } from 'react-native';

import ListItem from '../ListItem/ListItem';

interface IProps<T> {
  placeList: T[];
}

const List: React.SFC<IProps<string>> = (props: IProps<string>) => (
  <View>
    {props.placeList.map((list: string, index: number) => 
    <ListItem 
      key={index}
      place={list} />)}
  </View>
);

export default List;