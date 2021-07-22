import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  Pressable,
} from 'react-native';
import {DATA} from '../utils/Months';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Icon = MaterialCommunityIcons;

const Item = ({item, onPress, textColor, fontSize, index}) => (
  <Pressable style={[styles.item]} onPress={onPress}>
    <Icon name="arrow-left" color="darkblue" size={20} />
    <Text style={[styles.title, textColor, fontSize]}>{item.title}</Text>
    <Icon name="arrow-right" color="darkblue" size={20} />
  </Pressable>
);

const Months = () => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item, index}) => {
    const color = item.id === selectedId ? 'blue' : 'darkblue';
    const fontSize = item.id === selectedId ? 30 : 15;
    // console.log(item.title);
    // console.log(DATA[index]);
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        textColor={{color}}
        fontSize={{fontSize}}
      />
    );
  };
  return (
    <View style={styles.datesContainer}>
      <FlatList
        horizontal={true}
        initialNumToRender={3}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default Months;

const styles = StyleSheet.create({
  datesContainer: {
    height: '10%',
    width: '100%',
    borderWidth: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: 'white',
    borderWidth: 1,
    width: 390,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    width: 130,
    // borderWidth: 1,
    textAlign: 'center',
  },
});
