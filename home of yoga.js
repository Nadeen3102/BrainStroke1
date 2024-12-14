import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image  } from 'react-native';
import { Entypo } from '@expo/vector-icons';
const App = () => {
  const [CollectionsYogaExercises, setCollectionsYogaExercises] = useState([
    { id: 1,name: "Easy yoga for beginners", duration: "11 minutes",image:'https://images.unsplash.com/photo-1599447292180-45fd84092ef0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2,name: "Wake up yoga", duration: "11 minutes" ,image:'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'},
    { id: 3,name: "Morning yoga full body stretch", duration: "35 minutes",image:'https://images.unsplash.com/photo-1579566538101-636bbaed1b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'},
     ]);

  return (
    <View style={styles.container}>
    <Image source={{uri:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
     style={{
        height: "30%",
         width: '100%',
    }}/>
      <View style={{
         justifyContent:'space-between',
    alignContent:'space-between',
    flexDirection:'row'}} >
    <Text style={styles.title} >your plan for  today</Text>
    <TouchableOpacity><Text style={styles.title2}>View all</Text></TouchableOpacity>
    </View>
    <View style={{
        padding:10,
        height: "20%",
        width: '100%', 
        flexDirection:'row',
        justifyContent:'space-evenly',
    }}>

   <TouchableOpacity style={{width:'45%',height:'100%'}}>
    <Image source={{uri:'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
    style={{
       borderRadius:10,
       width: '100%', 
       height:'100%'
    }}/>
</TouchableOpacity>
<TouchableOpacity style={{width:'45%',height:'100%'}}>
    <Image source={{uri:'https://media.istockphoto.com/id/1158200967/photo/young-woman-doing-plank-and-workout-with-dumbbells-in-fitness.jpg?s=612x612&w=0&k=20&c=EvHGCicVXUpDeJoHEIft-FzvU10UjfwbHpk-9wz-pUs='}}
     style={{
         borderRadius:10,
       width: '100%', 
       height:'100%'
    }}/>
    </TouchableOpacity>
    </View>
    <View style={{
      alignSelf:'center'
    }}>
    <Text style={styles.title}>Collections of Yoga Exercises</Text>
    </View>
      <FlatList
        data={CollectionsYogaExercises}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
           <Image source={{ uri: item.image }} style={styles.listItemImage} />  
           <TouchableOpacity style={{
             width:'50%',
             justifyContent:'space-between'
           }}>
           <Text style={styles.listItemText}>{item.name}</Text>
            <Text style={styles.listItemDuration}>{item.duration} minutes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
             <Entypo name="bookmark" size={20} color="#9067c6" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title2:{
fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textDecorationLine:'underline',
  },
  listItem: {
    padding: '5%',
    flexDirection:'row',
    justifyContent:'space-between',

  },
   listItemImage: {
    width: '30%',
    height: 70,
    borderRadius:5
  },
  listItemText: {
    fontSize: 18,
  },
  listItemDuration: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;