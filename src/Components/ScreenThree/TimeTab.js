import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default class Time extends Component {
  render() {
    const {heading, peeps, time, image} = this.props;
    return (
      <View style={[styles.middle]}>
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
    width: '70%',
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'slateblue',
    // marginLeft: 10,
    // marginVertical: 10,
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
    borderWidth: 2,
    borderColor: 'white',
  },
  imageTwo: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    position: 'absolute',
    marginLeft: 30,
  },
});
