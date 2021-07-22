import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
        <View style={[styles.calendarBox]}>
          <Text style={[styles.textTop]}>Monthly Review</Text>
          <View style={styles.calender}>
            <Icon name="calendar-range-outline" color="white" size={25} />
          </View>
        </View>

        <View style={[styles.box]}>
          <View style={[styles.boxContainer]}>
            <View style={[styles.leftTop, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 20, fontWeight: 'bold'}]}>
                20
              </Text>
              <Text style={[styles.textBox]}>Done</Text>
            </View>
            <View style={[styles.leftBottom, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 20, fontWeight: 'bold'}]}>
                10
              </Text>
              <Text style={[styles.textBox]}>Ongoing</Text>
            </View>
          </View>
          <View style={[styles.boxContainer]}>
            <View style={[styles.rightTop, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 20, fontWeight: 'bold'}]}>
                7
              </Text>
              <Text style={[styles.textBox]}>In Progress</Text>
            </View>
            <View style={[styles.rightBottom, styles.boxCommon]}>
              <Text
                style={[styles.textBox, {fontSize: 20, fontWeight: 'bold'}]}>
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
    height: '15%',
    // borderWidth: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 10,
    marginLeft: 20,
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
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 15,
  },
  headerBottom: {
    // borderWidth: 1,
    width: '90%',
    fontSize: 15,
    color: 'white',
    marginBottom: 10,
    paddingLeft: 15,
  },
  middle: {
    // borderWidth: 1,
    width: '90%',
    borderRadius: 25,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'slateblue',
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
  calendarBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: '90%',
    paddingLeft: 5,
    paddingRight: 30,
    paddingTop: 10,
  },
  calender: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // borderWidth: 1,
    width: '90%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  boxContainer: {
    // borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textBox: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  boxCommon: {
    width: '90%',
    // borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'slateblue',
  },
  leftTop: {
    height: '50%',
    borderRadius: 30,
  },
  leftBottom: {
    height: '30%',
    borderRadius: 20,
  },
  rightTop: {
    height: '30%',
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
