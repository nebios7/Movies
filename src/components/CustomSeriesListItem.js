import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'



 export default class CustomSeriesListItem extends Component {

    render(){

        const {item, onItemClick} = this.props
        return(
            <TouchableOpacity onPress={() => onItemClick(item)}>
                <View style = {styles.container}>
                    <Image source={item.imgSrc} style={styles.image}></Image>
                    <View style= {styles.infoRightSide}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style ={styles.titleDate}>{item.date}</Text>
                        <Text style ={styles.titleActers}>{item.acters}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }
}

const styles = {
    container:{
        flexDirection: 'row',
        backgroundColor:'#000'

    },
    image:{
        width:100,
        height:140,
        margin:15,
       
    },
    infoRightSide:{
        margin:15,
        coler:'#fff'
    },
    title:{
        fontSize:20,
        color:'#FFF'
    },
    titleDate:{
        color:'#A4A4A4' 
    },
    titleActers:{
        color:'#A4A4A4',
        
    }
}

