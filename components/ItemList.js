import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';



const ItemList = ({ route, navigation }) => {
	
	const [items, setItems] = useState([]);
	
	useEffect( ( ) => {
	getData()
		
	})

  const getData = async () =>{
  try{
   const jsonValue = await AsyncStorage.getItem('@items')
   if (jsonvalue != null) {
     setItems(JSON.parse(jsonValue))
   }

  }
catch(e) {
	console.log(e);
}  


  }



	
	const goToDetails = () => {
		navigation.navigate('Item Details', {name: item.name, image: item.image} );
	}
	
	const itemCell  =({ item, index }) => (
		<TouchableOpacity 
		style={styles.cell}
		onPress= {  () => goToDetails(item) }
		key={index} 
		> 
		<Image style={styles.image} source={{ uri: 'date:image/jpeg;based64,' + item.itamge }} />	
		</TouchableOpacity>			
	);
	
	
  return (
    <SafeAreaView style={styles.grid} >
	  <ScrollView contentContainerStyle={styles.grid}>
      {
		  items.map( (item, index) => (
		   itemCell(item, index)
		  ))
	  }
	  </ScrollView>
	  <StatusBar style="auto" />
	 </SafeAreaView>
	
  );
}

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
	  backgroundColor: '#FFF',
  },
		
  grid:{
 flex: 1,
 marginTop: 3,
 marginLeft: 3,
 backgroundColor: "#FFF",
 flexDirection: 'row',
 justifyContent: 'flex-start',
 flexWrap: 'wrap'
  },

	title:{
		fontSize: 24,
		marginLeft: 20
	},

  cell: {

  },

	row: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	image:{
width: 125,
height: 125,

	}

});
