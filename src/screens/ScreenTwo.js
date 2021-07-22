import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Time from '../Components/ScreenThree/TimeTab';

import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

export default class ScreenTwo extends Component {
  render() {
    return (
      <View style={[styles.main]}>
        <Image
          style={styles.profile}
          source={require('../assets/images/profile.png')}
        />
        <View style={styles.top}>
          <Icon name="drag" color="white" size={35} />
        </View>
        <Text style={[styles.headerTop]}>Hi Ghulam</Text>
        <Text style={[styles.headerBottom]}>6 Tasks are pending</Text>
        <Time
          heading="Mobile App Design"
          peeps="Mike and Anita"
          time="Now"
          width="86%"
        />
        <View style={[styles.calendarBox]}>
          <Text style={[styles.textTop]}>Monthly Review</Text>
          <View style={styles.calender}>
            <Icon name="calendar-range-outline" color="white" size={22} />
          </View>
        </View>

        <View style={[styles.box]}>
          <View style={[styles.boxContainer]}>
            <View style={[styles.leftTop, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 25, fontWeight: 'bold'}]}>
                22
              </Text>
              <Text style={[styles.textBox]}>Done</Text>
            </View>
            <View style={[styles.leftBottom, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 23, fontWeight: 'bold'}]}>
                10
              </Text>
              <Text style={[styles.textBox]}>Ongoing</Text>
            </View>
          </View>
          <View style={[styles.boxContainer]}>
            <View style={[styles.rightTop, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 25, fontWeight: 'bold'}]}>
                7
              </Text>
              <Text style={[styles.textBox]}>In Progress</Text>
            </View>
            <View style={[styles.rightBottom, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 25, fontWeight: 'bold'}]}>
                12
              </Text>
              <Text style={[styles.textBox]}>waiting for Review</Text>
            </View>
          </View>
        </View>
        <View style={[styles.footer]}>
          <Icon name="home-variant-outline" color="white" size={30} />
          <Icon name="file-document-outline" color="skyblue" size={30} />
          <Icon name="account-outline" color="white" size={30} />
          <Icon name="bell-outline" color="white" size={30} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'darkslateblue',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  top: {
    height: '10%',
    // borderWidth: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 30,
    margin: 20,
  },
  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginTop: 30,
    marginLeft: 350,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-start',
    position: 'absolute',
  },
  headerTop: {
    // borderWidth: 1,
    width: '90%',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 20,
  },
  headerBottom: {
    // borderWidth: 1,
    width: '90%',
    fontSize: 15,
    color: 'white',
    marginBottom: 25,
    paddingLeft: 20,
  },
  calendarBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: '90%',
    paddingLeft: 20,
    paddingRight: 15,
    marginTop: 20,
    margin: 15,
  },
  textTop: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 5,
  },
  calender: {
    height: 35,
    width: 35,
    // borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // borderWidth: 1,
    width: '88%',
    height: '40%',
    flexDirection: 'row',
  },
  boxContainer: {
    // borderWidth: 1,
    width: '50%',
    alignItems: 'center',
  },
  textBox: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 4,
  },
  boxCommon: {
    width: '90%',
    // borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary_light,
  },
  leftTop: {
    height: '50%',
    borderRadius: 30,
  },
  leftBottom: {
    height: '33%',
    borderRadius: 20,
  },
  rightTop: {
    height: '33%',
    borderRadius: 20,
  },
  rightBottom: {
    height: '50%',
    borderRadius: 30,
  },
  footer: {
    height: '8%',
    width: '90%',
    // borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
