import * as React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';
import { Place } from '../../../App';

interface PlaceListProps<T> {
  onItemDeleted: (index: number) => void;
  places: T[];
}

const placeList: React.SFC<PlaceListProps<Place>> = (props: PlaceListProps<Place>) => (
  <FlatList
    data={props.places}
    renderItem={(info) => (
      <ListItem
        placeName={info.item.value}
        onItemPressed={() => props.onItemDeleted(info.item.key)} />
    )}
  />
);

export default placeList;