import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {DATA} from '../utils/Months';
import Today from './dayList';
import * as Colors from '../utils/Colors';

const Item = ({date, day, onPress, backgroundcolor, color}) => (
  <TouchableOpacity
    style={[styles.item, {backgroundColor: backgroundcolor}]}
    onPress={onPress}
    activeOpacity={0.1}>
    <Text style={[styles.title, {fontWeight: '700', color: color}]}>
      {date}
    </Text>
    <Text style={[styles.title, {fontSize: 15, color: color}]}>{day}</Text>
  </TouchableOpacity>
);
export default class Dates extends Component {
  state = {
    data: [],
    selectedId: null,
  };

  showList = date => {
    const indx = date === '1' ? 0 : 1;
    this.setState({
      data: DATA[3].days[indx].data,
    });
    // console.log('data=>', this.state.data);
  };
  hideList = () => {
    this.setState({
      data: [],
    });
    alert('data not available');
    // console.log('data=>', this.state.data);
  };
  changeId = val => {
    this.setState({selectedId: val});
  };
  render() {
    const {index} = this.props;
    // console.log(data);
    const renderItem = ({item}) => {
      const setData = () => {
        index === 3 && (item.date[0] === '1' || item.date[0] === '2')
          ? this.showList(item.date[0])
          : this.hideList();
      };
      const backgroundColor =
        this.state.selectedId === item.id ? Colors.primary_light : Colors.white;
      const color =
        this.state.selectedId === item.id ? Colors.white : Colors.primary_dark;
      // console.log(item.id);
      return (
        <Item
          date={item.date}
          day={item.day}
          onPress={() => {
            setData();
            this.changeId(item.id);
          }}
          backgroundcolor={backgroundColor}
          color={color}
        />
      );
    };
    return (
      <View style={[styles.main]}>
        <View style={styles.datesContainer}>
          <FlatList
            horizontal={true}
            initialNumToRender={5} //important
            data={DATA[index].days}
            renderItem={renderItem}
            extraData={this.state.selectedId}
          />
          <Text style={[styles.text]}>Ongoing</Text>
        </View>
        <Today data={this.state.data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  datesContainer: {
    height: 190,
    width: '100%',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: Colors.white,
    // borderWidth: 1,
    width: 80,
    padding: 20,
    marginHorizontal: 14,
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    color: Colors.primary_dark,
    textAlign: 'center',
    // borderWidth: 1,
    marginVertical: 3,
  },
  text: {
    // borderWidth: 1,
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
    color: Colors.primary_dark,
    marginTop: 20,
  },
});
