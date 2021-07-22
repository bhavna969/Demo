import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.left]}>
          <Icon name="view-headline" color={Colors.white} size={50} />
          <Icon name="home-circle" color={Colors.white} size={50} />
          <Icon name="cellphone" color={Colors.white} size={50} />
          <Icon name="bell-circle-outline" color={Colors.white} size={50} />
          <Icon name="cog-box" color={Colors.white} size={50} />
          <Icon name="power" color={Colors.white} size={50} />
          <View style={{height: 110}} />
        </View>
        <View style={[styles.right]}>
          <View style={[styles.header]}>
            <Text style={[styles.headerText]}>Smart Home</Text>
          </View>
          <View style={[styles.container]}>
            <Text style={[styles.welcomeText]}>Welcome</Text>
            <Text style={{color: Colors.white}}>
              loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem
            </Text>
          </View>
          <View style={[styles.input]}>
            <Text style={[styles.inputText]}>First Name</Text>
            <Text style={[styles.inputText]}>Last Name</Text>
            <Text style={[styles.inputText]}>E-mail</Text>
            <Text style={[styles.inputText]}>Password</Text>
          </View>
          <View style={[styles.bottom]}>
            <Icon
              name="checkbox-blank-outline"
              color={Colors.white}
              size={20}
            />
            <Text style={[styles.bottomText]}>hhxgdyuvewexutzgvnxjgbwed</Text>
          </View>
        </View>
        <View style={[styles.home]}>
          <Icon name="home-circle" color={Colors.white} size={80} />
        </View>
        <View style={[styles.button]}>
          <Text style={[styles.headerText]}>SignIn</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 1,
    flexDirection: 'row',
  },
  left: {
    width: '20%',
    // borderWidth: 1,
    paddingTop: 15,
    // borderTopLeftRadius: 20,
    backgroundColor: Colors.blue_light_5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  right: {
    width: '80%',
    // borderWidth: 2,
    // borderTopRightRadius: 20,
    backgroundColor: Colors.grey_light_10,
    paddingLeft: 20,
  },
  container: {
    paddingLeft: 40,
    paddingRight: 20,
    padding: 10,
  },
  welcomeText: {
    color: Colors.blue_light_10,
    fontSize: 30,
    paddingBottom: 10,
  },
  header: {
    // borderWidth: 2,
    height: '10%',
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    // borderWidth: 2,
    // padding: 10,
    paddingLeft: 30,
    paddingRight: 60,
  },
  inputText: {
    fontSize: 16,
    color: Colors.white,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blue_light_0,
    paddingBottom: 30,
  },
  bottom: {
    // borderWidth: 2,
    width: '100%',
    height: 40,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomText: {
    color: Colors.white,
    fontSize: 16,
    paddingRight: 40,
  },
  home: {
    backgroundColor: Colors.blue_light_5,
    height: 100,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 75,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    position: 'absolute',
    // borderWidth: 1,
  },
  button: {
    // borderWidth: 1,
    backgroundColor: Colors.blue_light_3,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    marginTop: 580,
    borderRadius: 50,
    position: 'absolute',
    // backfaceVisibility: 'visible',
  },
});
