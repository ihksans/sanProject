/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Button
} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class App extends React.Component
 {
   constructor(){
     super();
     this.checkPreviousSession();
   }
   async checkPreviousSession (){
     const didCrash = await Crashes.hasCrashedInLastSession();
     if(didCrash){
       const report = await Crashes.lastSessionCrashReport();
       alert("Sorry u has a that crash");
     }
   }
   render(){
     return (
     <>
     <View title="Crash">
       <Text>new feature realease</Text>
       <Button title="Calculate Information" onPress={() => Analytics.trackEvent('calculate_inflation')}>

       </Button>
      <Text>Footer</Text>
      </View>
     </>
   );
  }
  
};

const styles = StyleSheet.create({
  container:{
    marginTop:40
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

