import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

export default function foodPage({ navigation }) {
  const [data, setData] = useState([
    {
      day: 'Day 01',
      week: 'Weak 01',
      assessment: ',Assessment Week',
      meals: [
        {
          image:
            'https://images.unsplash.com/photo-1587339144367-f1cacbecac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
          meal: 'Breakfast',
          food: 'Pancake',
          time: '00:08 AM',
        },
        {
          image:
            'https://images.unsplash.com/photo-1600850055796-3e344841992a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          meal: 'Lunch',
          food: 'Salad',
          time: '00:04 PM',
        },
        {
          image:
            'https://images.unsplash.com/photo-1615485737651-580c9159c89a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
          meal: 'Dinner',
          food: 'Snack',
          time: '00:10 PM',
        },
      ],
    },
  ]);
  
  return (
   
      <>
    <View style={styles.container}>
    <View style={styles.dayContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View >
            <Text style={styles.day}>{item.day}</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={styles.week}>{item.week}</Text>
              <Text style={styles.week}>{item.assessment}</Text>
            </View>
            <FlatList
              data={item.meals}
              renderItem={({ item }) => (
                <View style={styles.mealContainer}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.listItemImage}
                  />
                  <View>
                    <Text style={styles.meal}>{item.meal}</Text>
                    <Text style={styles.food}>{item.food}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.time}
            />
          </View>
        )}
        keyExtractor={(item) => item.day}
      />
    </View>
    </View>
    </>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9067c6',
    paddingHorizontal: '2%',
  },
  dayContainer: {
    width:'100%',
    height:'80%',
    backgroundColor: '#fff',
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    marginTop:'50%',
    paddingLeft:'5%'
  },
  day: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: '10%',
  },
  week: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
    marginBottom:'15%'
  },
  listItemImage: {
    width: '30%',
    height: 70,
    marginRight: '3%',
    borderRadius: 5,

  },
  mealContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '30%',
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  meal: {
    fontSize: 14,
    marginRight: 10,
  },
  food: {
    fontSize: 14,
  },
});


