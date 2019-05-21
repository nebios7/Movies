import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LoginForm from './LoginForm';



export default class Login extends Component{

    static navigationOptions = {
        title: 'Login page',
      };
    render(){
        return(
            
            <View style={style.container}>
            <Text>Login</Text>
            <View style={style.loginContainer}>
                        <Image resizeMode="contain" style={style.login} source={require('../images/Haidar.png')} />
             </View>
             <LoginForm navigation={this.props.navigation}/>
            </View> 
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000'
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        
    },
    login: {
        position: 'absolute',
        width: 150,
        height: 150,
        
    }
});