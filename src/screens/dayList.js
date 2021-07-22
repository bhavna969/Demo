import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Time from '../Components/ScreenThree/TimeTab';

// import {data} from './dateList';

export default class Today extends Component {
  render() {
    const {data} = this.props;

    // console.log(data);
    return (
      <ScrollView style={[styles.main]} endFillColor={'red'}>
        <View style={[styles.container]}>
          <View style={[styles.timeBox]}>
            <Text style={[styles.time]}>9 AM</Text>
            <Text style={[styles.time]}>10 AM</Text>
          </View>
          {this.props.data.length > 0 ? (
            <Time
              heading={this.props.data[0].heading}
              peeps={this.props.data[0].peeps}
              time={this.props.data[0].time}
              image={this.props.data[0].image}
            />
          ) : (
            <Time />
          )}
        </View>
        <View style={[styles.container]}>
          <View style={[styles.timeBox]}>
            <Text style={[styles.time]}>10 AM</Text>
          </View>
          <View style={{borderWidth: 1, width: '70%', borderColor: 'red'}} />
        </View>
        <View style={[styles.container]}>
          <View style={[styles.timeBox]}>
            <Text style={[styles.time]}>11 AM</Text>
            <Text style={[styles.time]}>12 PM</Text>
          </View>
          {this.props.data.length > 0 ? (
            <Time
              heading={this.props.data[1].heading}
              peeps={this.props.data[1].peeps}
              time={this.props.data[1].time}
              image={this.props.data[1].image}
            />
          ) : (
            <Time />
          )}
        </View>
        <View style={[styles.container]}>
          <View style={[styles.timeBox]}>
            <Text style={[styles.time]}>1:00 PM</Text>
            <Text style={[styles.time]}>12 AM</Text>
          </View>
          {this.props.data.length > 0 ? (
            <Time
              heading={this.props.data[2].heading}
              peeps={this.props.data[2].peeps}
              time={this.props.data[2].time}
              image={this.props.data[2].image}
            />
          ) : (
            <Time />
          )}
        </View>
      </ScrollView>
    );
    // <Time />;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    // borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  timeBox: {
    // borderWidth: 1,
    width: '15%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  time: {
    fontSize: 16,
    color: 'navy',
    // borderWidth: 1,
    marginVertical: 20,
  },
});
