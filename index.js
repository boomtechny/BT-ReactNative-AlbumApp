



//Import a library to help create a component 

import React from 'react'; 
//import ReactNative from 'react-native'
import { AppRegistry, View } from 'react-native'; 
import Header from './src/components/Header'; 
import AlbumList from './src/components/AlbumList'
//Create a component 
const App = () => 
 (
 
//<Text>Some Text</Text>
<View>
<Header headerText={"Albums"}/>
<AlbumList/>
</View>
); 


//Render it to the device 
AppRegistry.registerComponent('testapp',()=>App); 
