import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Card</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.card1]}>
            <Text>Card 1</Text>
          </View>
          <View style={[styles.card, styles.card1]}>
            <Text>Card 2</Text>
          </View>
          <View style={[styles.card, styles.card1]}>
            <Text>Card 3</Text>
          </View>
          <View style={[styles.card, styles.card1]}>
            <Text>Card 4</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 10,
  },
  card: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 110,
    borderRadius: 5,
  },
  card1: {
    backgroundColor: 'lightblue',
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default ElevatedCard;
