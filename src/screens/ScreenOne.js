import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

export default class ScreenOne extends Component {
  render() {
    return (
      <View style={[styles.main]}>
        <Image
          style={[styles.image]}
          source={require('../assets/images/image.png')}
        />
        <Text style={[styles.textUp, styles.text]}>
          Manage your daily Tasks
        </Text>
        <Text style={[styles.text, styles.textMiddle]}>
          Team and Project management with solution providing App
        </Text>
        <View style={[styles.icon]}>
          <Icon name="circle" color={Colors.white} size={70} />
          <Text style={[styles.textBottom]}>Get Started</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 2,
    padding: 20,
    backgroundColor: Colors.blue_light_1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    borderWidth: 10,
    height: 250,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    marginBottom: 80,
  },
  text: {
    color: Colors.blue_dark_10,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  textUp: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  textMiddle: {
    fontSize: 17,
    fontWeight: '700',
    paddingRight: 10,
  },
  icon: {
    width: '80%',
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textBottom: {
    color: Colors.blue_dark_10,
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 30,
  },
});
