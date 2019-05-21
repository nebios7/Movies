/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Login from './src/login/Login'
import LoginForm from './src/login/LoginForm'
import Home from './src/login/Home'
import Movies from './src/components/Movies'
import Series from './src/components/Series'
import VideoGames from './src/components/VideoGames'
import MovieDescription from './src/components/MovieDescription';
import SeriesDescription from './src/components/SeriesDescription';
import GameDescription from './src/components/GameDescription';

const RootStack = createStackNavigator({
  LoginScreen: {screen: Login},
  Registeration: {screen: Home},
  MovieDescription: {screen: MovieDescription},
  SeriesDescription: {screen: SeriesDescription},
  GameDescription: {screen: GameDescription},
  
  HomeScreen: createMaterialTopTabNavigator({
    Movies: Movies,
    Series: Series,
    Games: VideoGames,
    
   }),
  
 //  Reservation: { screen: Reservation},
 
 })
const App = createAppContainer(RootStack);
export default  App;
