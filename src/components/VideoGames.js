import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, WebView, FlatList} from 'react-native';
import CustomGameListItem from './CustomMovieListItem'
import {videogames} from '../images/database/gameData'



export default class VideoGames extends Component{

  onItemClick = (item)  => {
    this.props.navigation.navigate('GameDescription', {videogames: item})
    
}
render() {
return (

<View>
    <FlatList
    data={videogames}
   
   renderItem={({item}) => <CustomGameListItem item={item} onItemClick={this.onItemClick}/>} />

</View>
)
}
//  render() {
//    return 
//    <View>

//       <WebView
//         style={{ marginTop: 20, width: 320, height: 230 }}
//         javaScriptEnabled={true}
//         domStorageEnabled={true}
//         source={{ uri: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6ZnfsJ6mM5c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }}
//       />
//    </View>

//  }
}