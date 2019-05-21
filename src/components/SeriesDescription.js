import React, {Component} from 'react'
import { View, Text, WebView, BackgroundImage, Image} from 'react-native';

export default class SeriesDescription extends Component {
constructor(props) {
   super(props)

   this.state = {
    series: this.props.navigation.getParam('series')
   }
}

   render (){
       const { series } = this.state
       return (
        
           <View style = {styles.container}>
                 <View style={styles.container2}>
                    <Image style={styles.imageSeries} source= {series.imgSrc}/> 
                    <View style={styles.containerClo}>
                    <Text style = {styles.nameFilm}>{series.title}</Text>
                    <Text style = {styles.description}>{series.date}</Text>
                 </View>            
                 </View>

                <Text style = {styles.description}>{series.description}</Text>
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
                                   <div><iframe id="bgvid" src="${series.sourceVideo}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        flex:1
    },
    container2:{
        flexDirection: 'row',
        flex:1
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
        padding:15
    },
    imageSeries:{
        width:100,
        height:140,
        margin:15,

    }

}