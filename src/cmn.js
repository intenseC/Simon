

'use strict';

import './global.js'

import React from 'react';

import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert,
  DeviceEventEmitter,
  NativeEventEmitter,
  PermissionsAndroid,
  Vibration,
  Keyboard,
  Image
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


 // =================  CSS / JSX  =================
 // ===============================================
 module.exports =
StyleSheet.create({
   containerMain: {
   flex: 1, 
   alignItems: 'center'
 },
   full: {
   fontFamily: 'VT323-Regular',
   textAlign: "center",
   textAlignVertical: "bottom",
   color: "#000",
   fontSize: wp('7.0%')
   
 },
   scores: {
   fontFamily: 'VT323-Regular',
   color: "#000",
   fontSize: wp('6.0%'),
   textAlign: "center"
 },
 body: {
   backgroundColor: "#FFF",
   flex: 1
 },
 container: {
   flex: 1,
   marginTop: 20,
   marginLeft: 16,
   marginRight: 16
 },
 header: {
   display: "flex",
   justifyContent: "center"
 },
 prgTitleN: {
    borderRadius: 3,
    height: hp('8%'),
    width: wp('91.5%'),
    marginTop: hp('4%'),
    marginBottom: 18,
    alignSelf: "center",
    color: "#000",
    textAlign: "center",
    textAlignVertical: "auto",
    fontSize: 40,
    fontWeight: 'bold'
 },
 prgVerTxt: {
    fontFamily: 'Cairo-Bold',
    marginTop: hp('3%'),
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 5,
    textAlign: "right",
    textAlignVertical: "auto",
    fontSize: 16,
    color: "#fff"
 },
 prgTitle: {
    borderRadius: 3,
    height: hp('5%'),
    width: wp('91.5%'),
    marginTop: 4,
    marginBottom: 8,
    alignSelf: "center",
    backgroundColor: "#1A6A0C",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
    textAlign: "center",
    textAlignVertical: "auto",
    fontSize: 20,
    fontWeight: 'bold',
    color: "#0af"

 },
 titleTxt: {
    alignSelf: "center",
    borderRadius: 5,
    height: hp('7%'),
    width: wp('86.5%'),
    backgroundColor: keyColor,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: hp('4%'),
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
    color: "#FFFFFF97"
 },
 prgTitleTxt: {
    fontFamily: 'Cairo-Bold',
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 3 },
    textShadowRadius: 5,
    textAlign: "center",
    textAlignVertical: "auto",
    fontSize: 24,

    color: "#0af"
 },
 line: {
   justifyContent: "space-between",
   marginTop: 2,
   marginBottom: 2,
   display: "flex",
   flexDirection: "row"
 },

 line0: {
    borderRadius: 5,
    backgroundColor: "#b3e8e8",
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 0.8
 },
 line1: {
    borderRadius: 3,
    width: wp('46.1%'),
    padding: 2,
    marginRight: -2,
    borderWidth: 1,
    borderLeftWidth: 1,
    marginBottom: 2, /* 4 */
    display: "flex",
    backgroundColor: "#bccccc88",
    flexDirection: "row"
 },
 line2: {

   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between"
 },
 title: {
    fontFamily: 'Cairo-Regular',
    fontSize: wp('4.0%'),
    marginRight: 5,
    marginLeft: 5
 },
 value: {
   color: "#0a7d10",
   fontFamily: 'VT323-Regular',
   fontSize: wp('4.2%'),
   marginRight: 5,
   marginLeft: 5
 },
 badValue: {
   color: "#e30e27",
   fontFamily: 'VT323-Regular',
   fontSize: wp('4.2%'),
   marginRight: 5,
   marginLeft: 5
 },
 output: {
   borderRadius: 5,
   marginTop: 12,
   marginBottom: 15,
   width: wp('91.5%'),
   height: hp('7%'),
   padding: 2,
   backgroundColor: "#FFF",
   borderWidth: 1
 },
  scorOutput: {
   borderRadius: 5,
   marginTop: 16,
   marginBottom: 10,
   width: wp('91.5%'),
   height: hp('50%'),
   padding: 2,
   backgroundColor: "#FFF",
   borderWidth: 1
 },
subOutput: {
   color: "#000",
   fontFamily: 'VT323-Regular',
   fontSize: wp('5.0%'),
   alignSelf: 'stretch',
   justifyContent: 'space-between'

 },
inputContainerBtn: {
   borderRadius: 5,
   backgroundColor: global.keyColor,
   marginBottom: 4,
   borderWidth: 0.8,
   width: wp('44.5%'),
   height: hp('7%'),
   padding: 2,
   marginTop: 10
 },
   inputContainer: {
   borderRadius: 5,
   backgroundColor: "#fff",
   marginBottom: 4,
   borderWidth: 0.8,
   width: wp('44.5%'),
   height: hp('7%'),
   padding: 2,
   marginTop: 10
 },
 textInput: {
   fontFamily: 'Cairo-Regular',
   fontSize: wp('8.0%'),
   color: "#1A6A0C",
   paddingLeft: 10,
   paddingRight: 10,
   paddingBottom: 11,
   height: hp('8%')
 },
 buttonGameX: {
    elevation: 8,
    width: wp('91%'),
    height: hp('8%'),
    marginTop: 28,
    marginBottom: 1,
    backgroundColor: "#AAD",
    borderRadius: 7,
    borderWidth: 0.5,
    textAlign: "center"
 },
 buttonGame: {
    elevation: 8,
    width: wp('45%'),
    height: hp('25%'),
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 1,
    marginRight: 5,
    borderRadius: 4,
    borderWidth: 0.8,
    textAlign: "center"
 },
 button: {
   elevation: 8,
   width: wp('21.5%'),
   borderRadius: 8,
   borderWidth: 0.8,
   marginTop: 4,
   marginBottom: 2,
   paddingLeft: 15,
   paddingRight: 15,
   height: hp('10%'),
   justifyContent: "center",
    /* BUTTON COLOR */
   backgroundColor: global.keyColor
 },
 buttonText: {
   fontSize: wp('7.5%'),
    textAlign: "center",
     color: "#fff"
 },
 buttonTextSpcl: {
    fontSize: wp('7.5%'),
    textAlign: "center",
   color: "#fff"
 },
 footer: {
 position: 'absolute',
 height: hp('5%'),
 bottom: 0,
 flex:0.1,
 left: 0,
 right: 0,
 justifyContent: "center",
 textAlign: "center",
 backgroundColor: global.keyColor,
 color: "#ffffff",
 marginBottom: 0
},
 footerTxt: {
 fontFamily: 'Cairo-Regular',
 textShadowColor: "#000",
 textShadowOffset: { width: 1, height: 1 },
 textShadowRadius: 5,
 color: "#000cf0",
 height: hp('3.5%'),
 textAlign: "center"

},
comLogo: {
   width: wp('7.5%'),
   height: hp('5.5%')
 },
btnTxtSml: {
   fontSize: wp('4.2%'),
   textAlign: "center",
   color: "#fff"
 },
buttonSml: {
   elevation: 8,
   width: wp('28.5%'),
   borderRadius: 8,
   borderWidth: 0.8,
   marginTop: 5,
   marginBottom: 5,
   paddingLeft: 15,
   paddingRight: 15,
   height: hp('5%'),
   justifyContent: "center",
   backgroundColor: global.keyColor
 },
 buttonWide: {
 display: "flex",
 alignSelf: "center",
 backgroundColor: global.keyColor,
 elevation: 8,
 width: wp('86.1%'),
 borderRadius: 8,
 borderWidth: 0.8,
 marginTop: 4,
 marginBottom: 2,
 paddingLeft: 15,
 paddingRight: 15,
 height: hp('10%'),
 justifyContent: "center"
},
sliderBox: {
  borderRadius: 5,
  backgroundColor: "#b3e8e8",
  marginBottom: 4,
  borderWidth: 0.8,
  width: wp('14.5%'),
  height: hp('17%'),
  padding: 2,
  marginTop: 10
  /*  */
},
tinyBtn: {
  elevation: 8,
  width: wp('41.5%'),
  borderRadius: 8,
  borderWidth: 0.8,
  marginTop: 5,
  marginBottom: 5,
  paddingLeft: 15,
  paddingRight: 15,
  height: hp('8%'),
  justifyContent: "center",
  backgroundColor: global.keyColor
},
lineBtns: {
   alignSelf: "center",
   width: wp('86.1%'),
   display: "flex",
   flexDirection: "row",
   justifyContent: "space-between"
},
outputBtn: {
  borderRadius: 5,
  alignSelf: "center",
  marginTop: 2,
  marginBottom: 5,
  width: wp('86.1%'),
  height: hp('10.5%'),
  fontSize: wp('6.5%'),
  padding: 2,
  backgroundColor: "#FFF",
  borderWidth: 1
},
btnTransp: {
   elevation: 1,
   width: wp('28.5%'),
   marginTop: hp('2.4%'),
   marginBottom: 5,
   paddingLeft: 5,
   paddingRight: 5,
   height: hp('5%'),
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: "#00000000"
 },
inputBox: {
    width: wp('86.1%'),
    height: hp('8.5%'),
    alignSelf: "center",
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    borderWidth: 0.5,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 5
},
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width: wp('94.1%'),
    height: hp('68.5%'),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F15454",
    borderRadius: 5,
    padding: 15,
    elevation: 2
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 18,
    fontSize: wp('7.5%')
  }
});
