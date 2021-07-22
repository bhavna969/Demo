import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapboxGL from '@react-native-mapbox-gl/maps';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = MaterialCommunityIcons;

const ACCESS_TOKEN =
  'pk.eyJ1IjoiYmhhdm5hY2hhdWRoYXJ5IiwiYSI6ImNrcmE2ZHZxajRma2wyb3FwZ3FtYjE4ZjIifQ.al77WftXFPgUPbZGAs-UqQ';
MapboxGL.setAccessToken(ACCESS_TOKEN);

export default class Map extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    currentLocation: 'none',
    coordinates: [],
  };
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(this.state);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      //   this.coordsToLocation(),
    );
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.longitude},${this.latitude}.json?access_token=${ACCESS_TOKEN}`,
      )
      .then(response => {
        console.log('response => ', response.data.features[0].place_name);
        this.setState({
          currentLocation: response.data.features[0].place_name,
          coordinates: response.data.features[0].geometry.coordinates,
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log('error => ', error);
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.page}>
        <View style={styles.header}>
          <Image
            style={styles.profile}
            source={require('../assets/images/profile.png')}
          />
          <View style={styles.headerText}>
            <Text style={{fontSize: 12, color: 'grey'}}>Good Morning</Text>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Ariuka</Text>
          </View>
          <Icon name="dots-vertical" color="black" size={40} />
        </View>

        <View style={styles.container}>
          {/* <Text>{this.state.currentLocation}</Text> */}
          {/* <Button title="get my location" onPress={() => this.getLocation()} /> */}
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
            source={require('../assets/images/count.png')}
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
            <Icon name="pause-circle" color="red" size={90} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
  image: {
    height: 120,
    width: 120,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 100,
    margin: 20,
    marginTop: 50,
  },
});
