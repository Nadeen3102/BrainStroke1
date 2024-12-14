import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet ,TouchableOpacity ,Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
const App = () => {
  const [yogaFlow, setYogaFlow] = useState([
    { id: 1, name: 'Mindful yoga flow', duration: 55 ,  image:'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { id: 2, name: 'Trikonasana', duration: 5  ,image: 'https://source.unsplash.com/random/300x200?trikonasana'},
    { id: 3, name: 'Warrior1', duration: 5 , image: 'https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Warrior2', duration: 5  , image: 'https://media.istockphoto.com/id/826171360/es/foto/guerrero-una.jpg?s=612x612&w=0&k=20&c=KVy202RXoDZ72NuofvfhjGVzxDCrlCTCBT0F6bpFyL8='},
    { id: 5, name: 'Tadasansa', duration: 15 , image: 'https://images.unsplash.com/photo-1560233075-4c1e2007908e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D' },
    { id: 6, name: 'Adho mukha shvasana', duration: 15 ,  image: 'https://source.unsplash.com/random/300x200?adho-mukha-shvasana' },
    { id: 7, name: 'Vriksasna', duration: 15 , image: 'https://media.istockphoto.com/id/1477072942/es/foto/fitness-en-casa-chica-con-ropa-corta-parada-en-tabl%C3%B3n-lateral-en-una-mano-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=gBf-KbhTM537u2jkgDybmgnrJinV2MI6MzhazdRCndg=' },
    { id: 8, name: 'Meditation', duration: 15 ,  image: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaXRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={yogaFlow}
        renderItem={({ item }) => (
          <View style={styles.listItem}>  
          <Image source={{ uri: item.image }} style={styles.listItemImage} />          
          
           <View >
           <Text style={styles.listItemText}>{item.name}</Text>
            <Text style={styles.listItemDuration}>{item.duration} minutes</Text>
            </View>
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
    padding: 20,
    backgroundColor: '#f9f9f9',
  },

  listItem: {
    padding: 10,
    flexDirection:'row',
    justifyContent:'',

  },
  listItemImage: {
    width: '30%',
    height: 70,
    marginRight: 10,
    borderRadius:5
  },
  listItemText: {
    fontSize: 15,
    flexDirection:'column',
    marginBottom:'20%'
    
  },
  listItemDuration: {
    fontSize: 14,
    color: '#666',
    flexDirection:"column"
    
  },
   icons:{
   flexDirection:'row',
    justifyContent:'flex-end',
    alignContent:'space-around',
    alignItems:'flex-start',
  }
});

export default App;