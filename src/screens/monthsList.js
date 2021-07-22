import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DATA} from '../utils/Months';
import Dates from './datesList';
import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

export default class Months extends Component {
  state = {
    Left: DATA[2].title,
    Middle: DATA[3].title,
    Right: DATA[4].title,
    index: 3,
  };
  setIndex = val => (val + 12) % 12;
  shiftLeft = () => {
    this.setState({
      index: this.state.index - 1,
      Left: DATA[this.setIndex(this.state.index - 2)].title,
      Middle: DATA[this.setIndex(this.state.index - 1)].title,
      Right: DATA[this.setIndex(this.state.index)].title,
    });
    // console.log(this.state);
  };
  shiftRight = () => {
    this.setState({
      index: this.state.index + 1,
      Left: DATA[this.setIndex(this.state.index)].title,
      Middle: DATA[this.setIndex(this.state.index + 1)].title,
      Right: DATA[this.setIndex(this.state.index + 2)].title,
    });
    // console.log(this.state);
  };
  render() {
    // console.log(this.state);
    return (
      <SafeAreaView style={styles.main}>
        <View style={[styles.Container]}>
          {this.state.index > 0 ? (
            <TouchableOpacity
              style={[styles.item]}
              onPress={() => this.shiftLeft()}>
              <Icon name="arrow-left" color={Colors.primary_dark} size={20} />
              <Text>{this.state.Left}</Text>
            </TouchableOpacity>
          ) : (
            <Text>{this.state.index}</Text>
          )}
          <Text style={[styles.title]}>{this.state.Middle}</Text>

          {this.state.index < 11 ? (
            <TouchableOpacity
              style={[styles.item]}
              onPress={() => this.shiftRight()}>
              <Text>{this.state.Right}</Text>
              <Icon name="arrow-right" color={Colors.primary_dark} size={20} />
            </TouchableOpacity>
          ) : (
            <Text>{this.state.index}</Text>
          )}
        </View>
        <Dates index={this.state.index} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: '90%',
    // borderWidth: 3,
  },
  Container: {
    height: '10%',
    width: '100%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: 80,
    height: 30,
    alignSelf: 'center',
    paddingTop: 3,
  },
  title: {
    fontSize: 30,
    width: 150,
    // borderWidth: 1,
    textAlign: 'center',
  },
});
