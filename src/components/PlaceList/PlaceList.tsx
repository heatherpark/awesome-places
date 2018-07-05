import * as React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';
import { Place } from '../../constants';

interface PlaceListProps {
  onItemDeleted: (index: number) => void;
  places: Place[];
}

const placeList: React.SFC<PlaceListProps> = (props: PlaceListProps) => (
  <FlatList
    data={props.places}
    renderItem={info => (
      <ListItem
        placeName={info.item.value}
        onItemPressed={() => props.onItemDeleted(info.item.key)} />
    )}
  />
);

export default placeList;