import React, {  useState, useEffect } from 'react';
import { Text,StyleSheet, FlatList, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';


export default function App () {
  const API =  'https://reactnative.dev/movies.json';
  const [Data, setData] = useState([]);

  const fetchPost = async() => {
    try{
      const response = await fetch(API);
      const json = await response.json();
      setData(json.movies);
    }
    catch(error){
      console.error(error);
    }
  };

  useEffect(()=> {
    fetchPost()
  }, []);


  return (
    <View style={{ flex: 1, padding: 24 }}>
        <FlatList
          data={Data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card style={styles.cardbox}>
              <Text style={styles.title}>Movie ID : {item.id}</Text>
              <Text >{item.title}</Text>
              <Paragraph>{item.releaseYear}</Paragraph>
            </Card>
          )}
        />
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  cardbox: {
    marginVertical:8,
    marginHorizontal:5,
    padding: 10,
    backgroundColor: '#FF731D'
  }, 
  title: {
    backgroundColor: '#5F9DF7',
    fontWeight: 'bold', 
    textAlign:  'left',
    paddingLeft: 10,
    borderRadius: 5,
    paddingVertical: 5 ,
  }

});
