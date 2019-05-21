import React, {Component} from 'react'
import { View, Text, WebView, BackgroundImage, Image,TouchableOpacity} from 'react-native';

export default class GameDescription extends Component {
constructor(props) {
   super(props)

   this.state = {
    videogames: this.props.navigation.getParam('videogames')
   }
}

   render (){
       const { videogames } = this.state
       return (
        
           <View style = {styles.container}>
                <View style={styles.container2}>
                    <Image style={styles.imageGame} source= {videogames.imgSrc}/>
                    <View style={styles.containerClo}>
                    <Text style = {styles.nameFilm}>{videogames.title}</Text>
                    <Text style = {styles.description}>{videogames.date}</Text>
                        {/* <TouchableOpacity style={styles.DownloadStyle} activeOpacity={0.5}>
                            <Image 
                                source={require('src/images/download.png')} 
                                style={styles.ImageIconStyle} 
                            />
    
                            <View style={styles.SeparatorLine} />
    
                            <Text style={styles.TextStyle}> download </Text>
    
                        </TouchableOpacity> */}
                    </View>               
                    
                </View>
               <Text style = {styles.description}>{videogames.description}</Text> 
               <View style={styles.container3}>
                        <WebView
                            scalesPageToFit={true}
                            bounces={false}
                            javaScriptEnabled
                            //style={{ height: 'auto', width: '100%' }}
                            source={{
                            html: `
                               <!DOCTYPE html>
                               <html>
                               <head>
                               <style>
                               #bgvid {
                                   position: fixed; right: 0; bottom: 0;
                                   min-width: 100%; min-height: 100%;
                                   width: auto; height: auto; z-index: -100;
                                 }
                                 </style>
                               </head>

                               <body style='margin:0px'>
                                   <div><iframe id="bgvid" src="${videogames.sourceVideo}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                   </div>
                               </body>
                               </html>
                            `,
                       }}
                       automaticallyAdjustContentInsets={false}
                   />
                </View>
           </View>
            );
         


   }
}

const styles = {

    container:{
        backgroundColor:'#000',
        flex:1,
    },
    container2:{
        flexDirection: 'row',
        flex:1,
    },
    container3:{
        flex:1,
        padding:10,
        
    },
    containerClo:{
        flexDirection: 'column',
    },
    imgBac:{
        width:200
    },
    nameFilm:{
        color:'#fff',
        fontSize:20,
        padding:20
    },
    description:{
        color:'#fff',
        fontSize:14,
        padding:15,
        textAlign: 'justify'
    },
    imageGame:{
        width:100,
        height:140,
        margin:15,

    },
    dowBtn:{
        height:30,
        
    },
    DownloadStyle:{
        backgroundColor: '#485a96',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5 ,
        margin: 5,
    },
    ImageIconStyle:{
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
    },
    SeparatorLine:{
        backgroundColor : '#fff',
        width: 1,
        height: 40  
    },
    TextStyle :{
        color: "#fff",
        marginBottom : 4,
        marginRight :20,
    }

}