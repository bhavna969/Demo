import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import {DATA} from '../utils/Months';

const Item = () => (
  <View style={[styles.middle]}>
    <Text style={[styles.textTop]}>Mobile App Design</Text>
    <Text style={[styles.textBottom]}>Mike and Anita</Text>
    <View style={[styles.middleBottom]}>
      <Image
        style={[styles.image]}
        source={require('../assets/images/profile.png')}
      />
      <Text style={{color: 'white'}}>Now</Text>
    </View>
  </View>
);

export default class Today extends Component {
  render() {
    const renderItem = () => <Item />;

    return (
      <View style={styles.Container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: '50%',
    // width: '100%',
    borderWidth: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
  },
  dates: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    borderWidth: 1,
    width: '80%',
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'slateblue',
    // marginLeft: 10,
    marginVertical: 10,
  },
  textTop: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 5,
  },
  textBottom: {
    color: 'white',
    margin: 5,
  },
  middleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 50,
    paddingLeft: 20,
  },
});
