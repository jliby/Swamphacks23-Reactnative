// A React component for displaying text.

// Text supports nesting, styling, and touch handling.

// In the following example, the nested title and body text will inherit the fontFamily from styles.baseText,
//  but the title provides its own additional styles. The title and body will stack on top of each other on account of
//   the literal newlines:


import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

const TextExample = () => {
   return (
      <View style = {styles.container}>
         <Text style = {styles.text}>
            <Text style = {styles.capitalLetter}>
               L
            </Text>
            
            <Text>
               orem ipsum dolor sit amet, sed do eiusmod.
            </Text>
            
            <Text>
               Ut enim ad <Text style = {styles.wordBold}>minim </Text> veniam,
               quis aliquip ex ea commodo consequat.
            </Text>
            
            <Text style = {styles.italicText}>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </Text>
            
            <Text style = {styles.textShadow}>
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
               deserunt mollit anim id est laborum.
            </Text>
         </Text>
      
      </View>
   )
}
export default TextExample

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
   text: {
      color: '#41cdf4',
   },
   capitalLetter: {
      color: 'red',
      fontSize: 20
   },
   wordBold: {
      fontWeight: 'bold',
      color: 'black'
   },
   italicText: {
      color: '#37859b',
      fontStyle: 'italic'
   },
   textShadow: {
      textShadowColor: 'red',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius : 5
   }
})
