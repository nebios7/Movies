import React, {Component} from 'react'
// import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native'
import {Alert, View, Text, TextInput, TouchableOpacity,StyleSheet, Icon} from 'react-native';



export default class LoginForm extends Component{

    onButtonPress() {
        this.props.navigation.navigate({ routeName: "HomeScreen" });
        if (this.TextInput == null) {
            Alert.alert("Please write username and password");

        }
    };
    onButtonPressRegister(){
        this.props.navigation.navigate({routeName: "Registeration"})
    }


    render(){
        return(
            <View style={styles.container}>
            {/* <Icon name ={'ios-person-outline'} size = {28} color={'rgba(255?255?255?0.7)'}/> */}
                <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

            <TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Password' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>

            <TouchableOpacity style={styles.buttonContainer} 
                     onPress={() => this.onButtonPress()}>
             <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.registar} 
                     onPress={() => this.onButtonPressRegister()}>
             <Text  style={styles.registar}>You can register here! Sign</Text>
            </TouchableOpacity> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     padding: 20,
     width:400,
     marginBottom:10
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        borderRadius:100,
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        borderRadius:100
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        borderRadius:100,
        
    },
    registar:{
        paddingTop:10,
        color : '#FFFFFF',
        textAlign: 'center',
        
    }
});
