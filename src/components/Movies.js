import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList,Image } from 'react-native';
import CustomMovieListItem from './CustomMovieListItem'
import {movies} from '../images/database/moviesData'

export default class Movies extends Component{
    onItemClick = (item)  => {
        this.props.navigation.navigate('MovieDescription', {movie: item})
        
    }
 render() {
  return (

   <View>
        <FlatList
        data={movies}
        /*
        data={[{imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'},
        {imgSrc : require('../images/hulk.jpg'), title:'Avengers',date:'2011', director:'Movie Director'}
        renderItem={({item}) => <CustomMovieListItem title={item.title} imgSrc={item.imgSrc} date={item.date}/>} />
    ]} 
        */
       renderItem={({item}) => <CustomMovieListItem item={item} onItemClick={this.onItemClick}/>} />

  </View>
  )


 }
}