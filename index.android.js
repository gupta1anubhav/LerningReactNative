import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Component1 from '/app/components/Component1/Component1'
export default class myapp extends Component{

  render(){
    return(
     <View>
       <Text>Hello Anubhav</Text>
     </View> 
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);