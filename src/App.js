import logo from './logo.svg';
import React, { Component } from 'react';
import Mapdisplay from './components/Mapdisplay';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



class App extends Component {

  


  render() {
    return (
     
   <div className="App">
    <Mapdisplay />
         <Map google={this.props.google} zoom={14} class="mapdisplayed">
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
    
 </InfoWindow>
 <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
  <Marker
    name={'Your position'}
    position={{lat: 37.762391, lng: -122.439192}}
    icon={{
      url: "/path/to/custom_icon.png",
      // anchor: new google.maps.Point(32,32),
      // scaledSize: new google.maps.Size(64,64)
    }} />
      <Marker onMouseover={this.onMouseoverMarker}
          name={'Current location'} />

 
</Map>

   </div>

      
    );
    <Mapdisplay />
  }
}
 


export default GoogleApiWrapper({
  apiKey: "AIzaSyCkgaNcUlENcK_OS82ECuOMvTjEs85GyiY"
})(App);
