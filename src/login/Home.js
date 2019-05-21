import React, {Component} from 'react'
import {View, Text,TextInput, TouchableOpacity} from 'react-native'





export default class Home extends Component{
    static navigationOptions = {
        title: 'Register page',
      };
    constructor(props){
        super(props);
        }
        onButtonPressRegistration() {
            this.props.navigation.navigate({ routeName: "HomeScreen" });
        };
        
        render(){
        
            return ( 
                    

                    <View style = {styles.container}>
                            <View style = {styles.textViewRegister}>
                                <Text style={styles.textRegister}>REGISTRATION</Text>
                            </View>
                            <TextInput style = {styles.inputRegister} 
                                autoCapitalize="none" 
                                onSubmitEditing={() => this.Register.focus()} 
                                autoCorrect={false} 
                                keyboardType='text' 
                                returnKeyType="next" 
                                placeholder='First Name' 
                                placeholderTextColor='rgba(192,192,192,0.7)'/>
                            <TextInput style = {styles.inputRegister} 
                                autoCapitalize="none" 
                                onSubmitEditing={() => this.Register.focus()} 
                                autoCorrect={false} 
                                keyboardType='text' 
                                returnKeyType="next" 
                                placeholder='Last Name' 
                                placeholderTextColor='rgba(192,192,192,0.7)'/>
                            <TextInput style = {styles.inputRegister} 
                                autoCapitalize="none" 
                                onSubmitEditing={() => this.Register.focus()} 
                                autoCorrect={false} 
                                keyboardType='text' 
                                returnKeyType="next" 
                                placeholder='Email' 
                                placeholderTextColor='rgba(192,192,192,0.7)'/>
                            <TextInput style = {styles.inputRegister} 
                                autoCapitalize="none" 
                                onSubmitEditing={() => this.Register.focus()} 
                                autoCorrect={false} 
                                keyboardType='text' 
                                returnKeyType="next" 
                                placeholder='Passwoed' 
                                placeholderTextColor='rgba(192,192,192, 0.7)'/>
                            <TouchableOpacity style={styles.buttonContainer} 
                                onPress={() => this.onButtonPressRegistration()}>
                                <Text  style={styles.buttonRegister}>Register</Text>
                            </TouchableOpacity> 


                            <View style={{backgroundColor: '#000',height:250}}></View>

                        </View>
                    
                )
        
            }
        
        }

        const styles = {

            container: {
                flix:1,
                padding: 20,
                marginBottom:10,
                backgroundColor:'#000'
               },

            buttonContainer: {
                backgroundColor: '#2980b6',
                paddingVertical: 15,
                borderRadius:100
               },

            buttonRegister:{
                color: '#fff',
                textAlign: 'center',
                fontWeight: '700',
                borderRadius:100,
                fontSize:16,
                fontWeight: 'bold'
                
            },   

            inputRegister:{
                height: 50,
                backgroundColor: 'rgba(225,225,225,0.2)',
                marginBottom: 30,
                padding: 10,
                color: '#678',
                borderRadius:100,
            },
            textViewRegister:{
                color:'#fff',
                marginBottom: 30,
            },
            textRegister:{
               
                textAlign: 'center',
                fontSize:22,
                padding: 10,
                color:'#fff',
                fontWeight: 'bold'
                
            }
        }

    
