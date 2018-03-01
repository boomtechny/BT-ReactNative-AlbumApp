import React, { Component } from 'react'; 
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component{

  state = { albums: [] }; //initial state empty by default 

  componentWillMount(){
  //  console.log('CompnentWillMount in AlbumList ');
  axios.get('https://7e8e9a7d.ngrok.io/music_albums').then(response=>this.setState( { albums: response.data} )); 
  }
  renderAlbums(){
   return  this.state.albums.map(album=>
   <AlbumDetail  key = {album.title} album={album} />);
  }
  render(){
    console.log(this.state);
  return(
    <ScrollView>
     {this.renderAlbums()}
      </ScrollView>

  );
}
}
export default AlbumList;


