import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import * as Colors from '../../utils/Colors';

export default class Time extends Component {
  render() {
    const {heading, peeps, time, image, width} = this.props;
    return (
      <View style={[styles.middle, {width: this.props.width || '70%'}]}>
        <Text style={[styles.textTop]}>{this.props.heading}</Text>
        <Text style={[styles.textBottom]}>{this.props.peeps}</Text>
        <View style={[styles.middleBottom]}>
          <Image
            style={[styles.image]}
            source={require('../../assets/images/profile.png')}
            // source={require(`../../assets/images/${this.props.image}`)}
          />
          <Image
            style={[styles.imageTwo]}
            source={require('../../assets/images/profile-two.png')}
            // source={require(`../../assets/images/${this.props.image}`)}
          />
          <Text style={{color: 'white'}}>{this.props.time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  middle: {
    // borderWidth: 1,
    width: '75%',
    borderRadius: 25,
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Colors.primary_light,
  },
  textTop: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textBottom: {
    color: Colors.white,
  },
  middleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 50,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  imageTwo: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.white,
    position: 'absolute',
    marginLeft: 25,
  },
});
