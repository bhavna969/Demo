import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {DATA} from '../utils/Months';
import Today from './dayList';

const Item = ({date, day, onPress}) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{date}</Text>
    <Text style={[styles.title, {fontSize: 16}]}>{day}</Text>
  </TouchableOpacity>
);
export default class Dates extends Component {
  state = {
    data: [],
  };

  showList = date => {
    const indx = date === '1' ? 0 : 1;
    this.setState({data: DATA[3].days[indx].data});
    // console.log('data=>', this.state.data);
  };
  render() {
    const {index} = this.props;
    // console.log(data);
    const renderItem = ({item}) => {
      // console.log(item.date);
      const fun = () => {
        {
          index === 3 && (item.date[0] === '1' || item.date[0] === '2')
            ? this.showList(item.date[0])
            : alert('data not available');
        }
      };
      return <Item date={item.date} day={item.day} onPress={() => fun()} />;
    };
    return (
      <View style={[styles.main]}>
        <View style={styles.datesContainer}>
          <FlatList
            horizontal={true}
            initialNumToRender={5} //important
            data={DATA[index].days}
            renderItem={renderItem}
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
    backgroundColor: 'white',
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
    color: 'darkblue',
    marginTop: 20,
  },
});
