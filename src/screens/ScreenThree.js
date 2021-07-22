import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Months from './monthsList';

const Icon = MaterialCommunityIcons;

export default class ScreenThree extends Component {
  render() {
    return (
      <View style={[styles.main]}>
        <View style={[styles.header]}>
          <View style={styles.arrow}>
            <Icon name="arrow-left" color="darkblue" size={30} />
          </View>
          <Image
            style={styles.profile}
            source={require('../assets/images/profile.png')}
          />
        </View>
        <Months />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 2,
    paddingTop: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  header: {
    // borderWidth: 1,
    width: '100%',
    height: '10%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  arrow: {
    height: 40,
    width: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'darkblue',
    alignSelf: 'center',
    paddingLeft: 8,
    paddingTop: 2,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-start',
  },
});
