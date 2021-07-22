import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {DATA} from '../utils/Months';
import Today from './dayList';
import * as Colors from '../utils/Colors';

const Item = ({date, day, onPress, backgroundcolor}) => (
  <TouchableOpacity
    style={[styles.item, {backgroundColor: backgroundcolor}]}
    onPress={onPress}
    activeOpacity={0.1}>
    <Text style={[styles.title]}>{date}</Text>
    <Text style={[styles.title, {fontSize: 16}]}>{day}</Text>
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
      const color =
        this.state.selectedId === item.id ? Colors.primary_light : Colors.white;
      const fun = () => {
        setData();
        this.changeId(item.id);
      };
      console.log(item.id);
      return (
        <Item
          date={item.date}
          day={item.day}
          onPress={() => fun()}
          backgroundcolor={color}
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
    height: 180,
    width: '100%',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: Colors.white,
    // borderWidth: 10,
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 50,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    // borderWidth: 1,
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
