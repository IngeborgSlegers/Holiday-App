import React from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import { listenerCount } from 'cluster';

const ListItem = ({ item }) => {
  return(
    <View>
      <Text>
        {console.log(item)}
        {item.item}
      </Text>
    </View>
  )
}

export default ListItem;