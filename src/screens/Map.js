import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {showLocation} from '../store/actions/mapAction';
import {ACCESS_TOKEN} from '../store/sagas/mapSaga';
import {connect} from 'react-redux';

import * as Colors from '../utils/Colors';

const Icon = MaterialCommunityIcons;

MapboxGL.setAccessToken(ACCESS_TOKEN);

class Map extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    // currentLocation: 'none',
    // coordinates: [],
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position.coords);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        // console.log('==>', this.state);
        this.props.showLocation(this.state);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      // console.log('====>', this.state),
    );
  }

  render() {
    const {location} = this.props;
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.header}>
          <Image
            style={styles.profile}
            source={require('../assets/images/profile.png')}
          />
          <View style={styles.headerText}>
            <Text style={{fontSize: 12, color: Colors.grey_light_5}}>
              Good Morning
            </Text>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Ariuka</Text>
          </View>
          <Icon name="dots-vertical" color={Colors.black} size={40} />
        </View>
        <View style={styles.container}>
          <MapboxGL.MapView
            style={styles.map}
            onUpdate={this.onUserLocationUpdate}>
            <MapboxGL.UserLocation
              animated={true}
              visible={true}
              showsUserHeadingIndicator={true}
              //   onPress={this.getLocation()}
            />
            <MapboxGL.Camera
              //   zoomLevel={19}
              followUserMode={'normal'}
              followUserLocation
              heading={20}
            />
          </MapboxGL.MapView>
        </View>
        <View style={[styles.box]}>
          <Image
            style={styles.image}
            source={require('../assets/images/steps.png')}
          />
          <View style={{borderWidth: 1, margin: 50}} />
          <View style={[styles.boxText]}>
            <Text style={[styles.text]}>Duration</Text>
            <Text style={[styles.text, {fontSize: 30}]}>0:37:21</Text>
            <Text style={[styles.text, {marginTop: 15}]}>Energy</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={[styles.text, {fontSize: 30}]}>75.5</Text>
              <Text style={{paddingLeft: 10}}>Kcl</Text>
            </View>
          </View>
          <View style={styles.icon}>
            <Icon name="pause-circle" color={Colors.red} size={90} />
          </View>
        </View>
        <View style={styles.arrow}>
          <Icon name="arrow-collapse" color={Colors.black} size={30} />
        </View>
        {/* <Text style={[styles.text]}>{location}</Text> */}
        {/* <Button
          title="get my location"
          onPress={() => showLocation(this.state)}
        /> */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.mapReducer.location,
  };
};
export default connect(mapStateToProps, {showLocation})(Map);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    // borderWidth: 1,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  headerText: {
    // borderWidth: 3,
    width: 250,
    height: 60,
    justifyContent: 'space-evenly',
  },
  box: {
    height: '30%',
    width: '100%',
    // borderWidth: 1,
    borderBottomLeftRadius: 70,
    position: 'absolute',
    backgroundColor: Colors.white,
    marginTop: '16%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxText: {
    // borderWidth: 1,
    width: '40%',
    paddingTop: 20,
    paddingBottom: 50,
  },
  text: {
    fontWeight: '700',
    fontSize: 15,
    paddingLeft: 20,
    borderWidth: 1,
  },
  container: {
    height: '70%',
    width: '100%',
    // borderWidth: 2,
    justifyContent: 'flex-end',
    backfaceVisibility: 'visible',
  },
  map: {
    flex: 1,
  },
  icon: {
    height: 100,
    width: 100,
    // borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'visible',
    marginTop: 150,
    marginLeft: 280,
    backgroundColor: Colors.white,
  },
  arrow: {
    height: 70,
    width: 70,
    // borderWidth: 2,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 570,
    backgroundColor: Colors.white,
  },
  image: {
    height: 120,
    width: 120,
    // borderWidth: 2,
    borderRadius: 100,
    margin: 20,
    marginTop: 50,
  },
});
