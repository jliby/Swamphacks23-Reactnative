import React from 'react';
import {View, Text} from 'react-native';


// The most fundamental component for building a UI, View is a container that
//  supports layout with flexbox, style, some touch handling, and accessibility controls.
//   View maps directly to the native view equivalent on whatever 
//   platform React Native is running on, whether that is a UIView, <div>, android.view, etc.

// View is designed to be nested inside other views and can have 0 to many children of any type.

// This example creates a View that wraps two boxes with color and a text component in a row with padding.

// https://reactnative.dev/docs/view
const ViewExample = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <View style={{color: 'blue', flex: 0.3}}>      <Text>Hello World!</Text> </View>
      <View style={{backgroundColor: 'red', flex: 0.5}} />
    </View>
  );
};

export default ViewExample;