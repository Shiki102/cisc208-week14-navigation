import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';

const ItemDetails = ({ navigation, route }) => {

	const {name, image } = route.parms;
	
	const goBackToList = () => {
		navigation.navigate('Item List');
	}
	
	
  return (
    <View style={styles.container}>
		<Image style={styles.image} source={{ uri: 'date:image/jpeg;based64,' + item.itamge }} />	
      <Text style={style.title}>
	  {name}
	  </Text>
	  <Button title="Go Back to List" 
	    onPress={goBackToList} />
      <StatusBar style="auto" />
    </View>
  );
}

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
	  backgroundColor: '#FFF',
	  alignItems: 'center',
	  justifyContent: 'flex-start',
  },
			
	title:{
		fontSize: 36,
		
		marginBottom: 20,
	},
image: {
width: '100%',
height: 200,
resizeMode: 'cover',
marginBottom: 10

}

});
