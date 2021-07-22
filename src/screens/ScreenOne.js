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
    height: 300,
    width: '80%',
    borderBottomLeftRadius: 190,
    borderBottomRightRadius: 190,
    marginBottom: 50,
  },
  text: {
    color: Colors.blue_dark_10,
    alignSelf: 'flex-start',
    paddingLeft: 40,
    paddingRight: 20,
    marginVertical: 10,
  },
  textUp: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  textMiddle: {
    fontSize: 17,
    fontWeight: '700',
    paddingRight: 10,
  },
  icon: {
    width: '70%',
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  textBottom: {
    color: Colors.blue_dark_10,
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 29,
  },
});
