import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Header as HeaderElement } from '@rneui/themed';


const Header = () => {

return (

    <HeaderElement
      containerStyle = {{height : 85, backgroundColor : "darkblue"}}
      leftComponent={{
        icon: 'menu',
        color: '#fff',
      }}
      centerComponent={<Text style={styles.heading}>Apprenants de la MANU</Text>}
    />

);
};

const styles = StyleSheet.create({
heading: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
},

});

export default Header;