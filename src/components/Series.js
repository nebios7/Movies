import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import CustomSeriesListItem from './CustomSeriesListItem'
import {series} from '../images/database/seiresData'





export default class Series extends Component{
  onItemClick = (item)  => {
    this.props.navigation.navigate('SeriesDescription', {series: item})
    
  }

 render() {
   return (
    <View>
      <FlatList
      data={series}
   
      renderItem={({item}) => <CustomSeriesListItem item={item} onItemClick={this.onItemClick}/>} />

    </View>

     
   );

 }
}