import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {windowHeight, windowWidth} from '../Utillity/utils';
import MapViewDirections from 'react-native-maps-directions';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import {Divider, Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomImage from '../Components/CustomImage';
import CustomButton from '../Components/CustomButton';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import Foundation from 'react-native-vector-icons/Foundation';
import { Rating } from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';

const RideBookingScreen = () => {
  const origin = {latitude: 37.3285792, longitude: -122.0356209};
  const destination = {latitude: 37.3320305, longitude: -122.0355326};
  return (
    <View style={styles.container}>
      {/* <Header/> */}
<View style={styles.header}>
<TouchableOpacity
          style={{width: windowWidth * 0.09, 
            backgroundColor:'white',
            height: windowWidth * 0.09,
            justifyContent:'center',
            elevation:12,
            alignItems:'center',
            borderRadius: (windowWidth * 0.09)/2
          }}
          onPress={()=>{
            // navigation.toggleDrawer()
          }}
          >

          <Icon as={Ionicons} name="menu" size={moderateScale(20,0.2)} />
          </TouchableOpacity>
          <View style={{
          width: windowHeight * 0.045, 
          justifyContent:'center',
          alignItems:'center',
          elevation:12,
          height:windowHeight * 0.045, 
          // overflow:'hidden',
          backgroundColor:'#dedbdbc8', borderRadius: (windowHeight * 0.045) / 2}}>
          <CustomImage source={require('../Assets/Images/Group13.png')} 
            style={{width:windowHeight * 0.04, height: windowHeight * 0.04}}
          />
        </View>
</View>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.3318456,
          longitude: -122.0296002,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={origin} style={{width: 15, height: 10}} />
        {/* // icon={require('../Assets/Images/Marker.png')}/> */}
        {/* // image={require('../Assets/Images/Marker.png')}/> */}
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeColor="blue"
          strokeWidth={10}
          apikey="AIzaSyCHuiMaFjSnFTQfRmAfTp9nZ9VpTICgNrc"
        />
        <Marker coordinate={destination} />
      </MapView>
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection:'row', justifyContent:'space-between'}}>

      <View style={styles.profile}>
            <View style={{width: windowWidth * 0.1, height:windowWidth * 0.1, overflow: 'hidden', borderRadius: (windowWidth * 0.19)/2}}>
              <CustomImage source={require('../Assets/Images/men.png') } style={{width: "100%", height:'100%'}}/>
            </View>
            <View>
              <CustomText style={{fontSize:moderateScale(12,0.2)}}>Car No 3</CustomText>
            <Rating imageSize={14}/>
            </View>
            </View>
            <View style={{flexDirection:'row', gap:moderateScale(10,0.2)}}>

            <LinearGradient colors={['#79B9F6', '#00309E']} style={{width: windowWidth * 0.08, height: windowWidth * 0.08, 
                alignItems:'center',
                justifyContent:'center',
                borderRadius:(windowWidth * 0.08)/2}}>
                <Icon as={FontAwesome} name='phone' color ={'white'}/>

            </LinearGradient>
            <LinearGradient colors={['#79B9F6', '#00309E']} style={{width: windowWidth * 0.08, height: windowWidth * 0.08, 
                alignItems:'center',
                justifyContent:'center',
                borderRadius:(windowWidth * 0.08)/2}}>
                <Icon as={MaterialCommunityIcons} name='chat' color ={'white'}/>

            </LinearGradient>
                    </View>
          
          </View>
          <CustomText style={{marginTop:moderateScale(12,0.2), fontSize: moderateScale(20,0.2)}}>2013 Dodge Caravan</CustomText>
          <View style={{flexDirection:'row', gap:moderateScale(5,0.2)}}>
          <Foundation name='marker' color='#FF8A00' size={20}/>
          <CustomText>Fannie Street San Angelo, Texas</CustomText>

          </View>
          <CustomText>Available seats</CustomText>
          <CustomText style={{fontSize: moderateScale(12,0.2), color: '#98A5B4'}}>02</CustomText>

          <View style={styles.rideDetails}>
            <View style={{flexDirection:'row', alignItems:'center',gap: moderateScale(10,0.2)}}>
            <CustomImage source={require('../Assets/Images/caricon.png')}/>
              {/* <Icon as={Ionicons} name='car-sport' color={'black'} size={moderateScale(22,0.2)}/> */}
              <View style={{ alignItems:'center'}}>
                <CustomText>Car No 3</CustomText>
              </View>
            </View>
            <View style={{gap: moderateScale(2,0.2), alignItems:'center'}}>
            
                <CustomText isBpld>Distance</CustomText>
                <CustomText style={{color:'grey'}}>2.5 km</CustomText>
            
            </View>
            <View style={{gap: moderateScale(2,0.2), alignItems:'center'}}>
         
                <CustomText isBpld>Time</CustomText>
                <CustomText style={{color:'grey'}}>2 Mins</CustomText>
            </View>

          </View>
      </View>
      <View style={styles.actions}>
        <CustomButton
          onPress={() => {
            // navigation.navigate('HomeScreen')
          }}
          isGradient
          text={'Yes'}
          fontSize={moderateScale(14, 0.3)}
          textColor={Color.white}
          borderWidth={2}
          borderColor={Color.white}
          borderRadius={moderateScale(30, 0.3)}
          width={windowWidth * 0.9}
          height={windowHeight * 0.07}
          marginTop={moderateScale(30, 0.3)}
          bgColor={['#79B9F6', '#00309E']}
          isBold
          // isGradient
        />
      </View>
    </View>
    // <View>
    //   <Text>BoardingPointDetails</Text>
    // </View>
  );
};

export default RideBookingScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'red',
  },
  locBox: {
    width: windowWidth * 0.85,
    // height: windowHeight * 0.4,
    // borderRadius:moderateScale(12,0.2),
    marginTop: moderateScale(12, 0.2),
    // position:'absolute',

    zIndex: 1,
    // backgroundColor:'red'
  },
  bottomContainer: {
    width: windowWidth * 0.94,
    // height: windowHeight * 0.5,

    //   zIndex:1,
    backgroundColor: '#F8F8F8',
    borderRadius: moderateScale(24, 0.3),
    position: 'absolute',
    borderColor: '#29478A',
    borderWidth: moderateScale(1, 0.2),
    bottom: moderateScale(100, 0.2),
    paddingVertical: moderateScale(17, 0.2),
    paddingHorizontal: moderateScale(10, 0.2),
    // padding:moderateScale(20,0.2)
  },

  header:{
    zIndex:1,
    position:'absolute',
    top:1,
    width: windowWidth, 
      paddingHorizontal:moderateScale(12,0.3),
      paddingVertical:moderateScale(12,0.2),
      flexDirection:'row', justifyContent:'space-between', alignItems:'center'
  },
  profile: {
      flexDirection:'row',
    alignItems: 'center',
    gap: moderateScale(5, 0.2),
  },
  rideDetails: {
    flexDirection: 'row',
    marginTop:moderateScale(11,0.2),
    justifyContent: 'space-between',
    paddingVertical: moderateScale(2, 0.2),
    paddingHorizontal: moderateScale(22, 0.2),
  },
  actions: {
    position: 'absolute',
    bottom: 40,
  },
});
