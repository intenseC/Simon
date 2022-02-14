/*
 * Simon Says Game Core App
 * author:
 * Simon 'intenseC' Katznelson
*/
//=================================================================
//=================================================================

 var styles = require('./SRC/cmn.js');
 import './SRC/cmn.js'
 import './SRC/global.js'
 import mainScreen from './SRC/mainScr.js'

 import
    {
    /**/
    increment,
    decrement,
    setVal,
    setIdx,
    store,

    }
    from './SRC/eRedux.js'

 import
 Tone
 from "react-native-tone-android";

 import {
	 Provider,
	 connect
        }
	 from 'react-redux';

 import {
     applyMiddleware,
	 createStore,
	 combineReducers
		}
	    from 'redux';

 import {
  createReduxContainer,
  createNavigationReducer,
        }
  from 'react-navigation-redux-helpers';

 import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
        }
  from 'react-navigation-redux-helpers';

 import {
     widthPercentageToDP  as wp,
     heightPercentageToDP as hp
        }
  from 'react-native-responsive-screen';

 import * as React from 'react';
 import {
	NavigationContainer 
	} 
	from '@react-navigation/native';
 import {
	createNativeStackNavigator 
        }
	from '@react-navigation/native-stack';

 import type
        {
	    Node
        }
	from 'react';

 import {
  Button, 
  SafeAreaView,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  AppRegistry
        }
  from 'react-native';

 import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
        }
  from 'react-native/Libraries/NewAppScreen';

 import {
  createStackNavigator,
        }
  from 'react-navigation-stack';

 import {
  StackNavigator,
  addNavigationHelpers,
        }
   from 'react-navigation';

 import {
    useState,
    useEffect,
    useRef
        }
   from 'react';

 import
    AsyncStorage
    from '@react-native-async-storage/async-storage';
//=================================================================
//=================================================================
 global.Stack = createNativeStackNavigator();
 global.Score = 0;

 let cScore;
 let displ;
 let scoreTable = '';
 global.fillScr = 0;
//=================================================================
//=================================================================
{/*
*/}
//=================================================================
//=================================================================

const  storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
      } catch (e) { console.log(e);
   }
}

const getData = async (key) => {
    if(typeof key === 'undefined')  key = 'Key';
  try {
    const value = await AsyncStorage.getItem(key);
     if(value !== null) {
         return (value);
      }
    } catch(e) { console.log(e);
  }
}


/* */
//=================================================================
//=================================================================
// Build the table
async function fillScores() {
    let name    = '';
    let score   = '';
    scoreTable  = '';
    let len     =  0;

         scoreTable += (typeof cScore !== 'undefined') ?
        `\n  You scored ${cScore} times! \n\n` : '\n\n';
//   on a fresh install only
     name = await getData('_name1'); 
     if(typeof name === 'undefined')
     for(let y = 1; y < 11; y++) {
      await storeData('_name' + y.toString(), "???" );
      await storeData('_key' + y.toString(), '0');
	 }

       for(let y = 1; y < 11; y++) {
       name =  await getData('_name' + y.toString());
//     do some padding here, note that font is monospaced
       name = name.substring(0, 10); // limit to 10 chars
	   len  = (name.length < 10) ? 10 - name.length : 0;
	   while(len--)  name += '\u00A0';
/**/
       scoreTable += 'PLAYER:\u00A0';
       scoreTable += (typeof name !== 'undefined') ? name : '';
       scoreTable +=  '\u00A0\u00A0';
       scoreTable += 'SCORE:\u00A0';
       score = await getData('_key' + y.toString());
       scoreTable += (parseInt(score) < 10) ? ' 0' : ' ';
       scoreTable += (typeof score !== 'undefined') ? score : '';
       scoreTable += '\n';
      }
//      console.log(scoreTable);
}
//=================================================================
//=================================================================

export default
function App() {

    if(typeof store.getState().reducer.value === 'undefined') {
    global.Score = 0;
    store.dispatch(setVal());
    }
    if(typeof store.getState().reducer.idx   === 'undefined') {
    global.Idx = 0;
    store.dispatch(setIdx());
    }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Score Table">
        <Stack.Screen name = "Score Table" component = { scoreScreen } />
        <Stack.Screen name = "Simon Says" component = { mainScreen } />
        <Stack.Screen name = "About" component = { aboutScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function aboutScreen() {
  return (
    <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style = {{ textAlign: "center" }}>
    { "Simon the Game.\n  Written by Simon Katznelson. \nThis Program is Free and Open Source." }
    </Text>
    </View>
  );
}

function scoreScreen({ navigation }) {
 // hooks only, no constructor
let [ count, setCount ]   = useState(store.getState().reducer.value);
let [ msg, setMsg ]       = useState('');
const scrlViewRef = useRef();

useEffect( ()  => {
  fillScores();
},             []);

   /* refreshing / updating states here */
displ = setInterval( () => {
	if(global.fillScr == 1) {
      global.fillScr = 0;
      fillScores();
	}
   setCount(count = store.getState().reducer.value > 4 ?
   store.getState().reducer.value - 4 : 0);
   cScore = count;
   global.Idx = store.getState().reducer.idx;
   setMsg(msg = scoreTable);
  },
   200)

  return (
    <View   style = { styles.container }>
    <View>
    <ScrollView
    ref =   { scrlViewRef }
   onContentSizeChange = {(contentWidth, contentHeight) =>
            { scrlViewRef.current.scrollToEnd({ animated: true })
        }
    }
      style = { styles.scorOutput }>
        <Text style = { styles.scores }>
         { msg }
        </Text>
      </ScrollView>

      <Text></Text>
      <Button title   = "Start A New Game"
        onPress = { () => {
            clearInterval(displ), navigation.navigate("Simon Says")
        } }/>


              <Text></Text>
      <Button title   = "update score"
        onPress = {  () => {
            fillScores();
        } } />

              <Text></Text>
      <Button title   = "about"
        onPress = {  () => {
            fillScores();
            navigation.navigate("About");
        } }/>

    </View>
    </View>

  );
}
		/*   */
//=================================================================
//=================================================================
		/*   */

